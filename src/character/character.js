import Base from './base';
import Stats from './stats';
import {CHAR_TYPES} from './chartypes';
import CharacterCustomisation from './charactercustomisation';
import BeltConfig from './beltconfig';
import Skills from './skills';
import Progression from './progression';
import Telemetry from './telemetry';
import Versions from './versions'
import CharacterCosmetics from './charactercosmetics';
import Inventory from './inventory';
import PSTConfig from './pstconfig';
import ApocalypticData from './apocalypticdata';
import CONFIG from '../config';

export default class Character {

    constructor () {
        this._stats = {};
    }

    getInitialStats () {
        return [
            Base,
            CharacterCustomisation,
            Stats,
            ...Skills,
            BeltConfig,
            ...Progression,
            Telemetry,
            Versions,
            CharacterCosmetics,
            ...Inventory,
            PSTConfig,
            ApocalypticData
        ];
    }

    saveStats () {
        const statTypes = this.getInitialStats();

        statTypes.forEach(stat => this.storeStatType.call(this, stat));
    }

    storeStatType (stat) {
        let savedStat = {};

        if (stat.hidden) {
            this._stats[stat.label] = stat.fields;
            return;
        }

        if (stat.type === 'select') {
            this.storeSelect(stat);
        } else {

            Object.keys(stat.fields).forEach(field => {
                let data = stat.fields[field];
                const input = document.getElementById(field);
                let value = input ? input.value : data.default;

                if (data.type === CHAR_TYPES.NUMBER) {
                    value = parseInt(value);
                }

                savedStat[data.label] = value;
            });

            if (stat.label === 'Base') {
                this._stats = savedStat;
            } else {
                this._stats[stat.label] = savedStat;
            }
        }
    }

    storeSelect (stat) {
        let elem = document.getElementById(stat.label);
        let selected;

        if (stat.allowMultiple) {

            selected = [...elem.selectedOptions].map(e => e.value);
        } else {
            selected = elem.selectedOptions[0].value;
        }

        // TODO: So much for nice split up, independent code.
        if (stat.saveType) {

            if (!this._stats[stat.saveType]) {
                this._stats[stat.saveType] = {};
            }
            this._stats[stat.saveType][stat.label] = stat.saveAs(selected);
        } else {
            this._stats[stat.label] = stat.saveAs(selected);
        }
    }

    exportJSON () {
        this.saveStats();

        if (CONFIG.DOWNLOAD_ENABLED) {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this._stats));
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", this._stats.Name + ".json");
            document.body.appendChild(downloadAnchorNode); // required for firefox
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        } else {
            console.log(this._stats);
        }
    }
};