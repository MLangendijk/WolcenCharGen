import { BASE } from './base';
import { STATS } from './stats';
import {CHAR_TYPES} from "./chartypes";

export default class Character {

    constructor () {
        this._stats = {};
    }

    getInitialStats () {
        return [
            BASE, STATS
        ];
    }

    saveStats () {
        const statTypes = this.getInitialStats();

        statTypes.forEach(stat => this.storeStatType.call(this, stat));
    }

    storeStatType (stat) {
        let savedStat = {};

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

    exportJSON () {
        this.saveStats();

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this._stats));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", this._stats.Name + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
};