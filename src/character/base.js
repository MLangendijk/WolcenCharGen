import {CHAR_TYPES} from "./chartypes";

export default {
    label: 'Base',
    fields: {
        NAME: {
            label: 'Name',
            default: 'GeneratedName',
            type: CHAR_TYPES.STRING
        },
        PLAYER_ID: {
            label: 'PlayerId',
            default: 'offlineplayer',
            hidden: true,
            type: CHAR_TYPES.STRING
        },
        CHARACTER_ID: {
            label: 'CharacterId',
            default: 'GeneratedName',
            type: CHAR_TYPES.STRING
        },
        DIFFICULTY_MODE: {
            label: 'DifficultyMode',
            default: 1,
            hidden: true,
            type: CHAR_TYPES.NUMBER
        },
        LEAGUE: {
            label: 'League',
            default: 1,
            hidden: true,
            type: CHAR_TYPES.NUMBER
        },
        UPDATED_AT: {
            label: 'UpdatedAt',
            default: new Date().getTime(),
            hidden: true,
            type: CHAR_TYPES.DATE
        }
    }
};