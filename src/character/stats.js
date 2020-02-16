import { CHAR_TYPES } from "./chartypes";

export default {
    label: 'Stats',
    fields: {
        STRENGTH: {
            label: 'Strength',
            default: 0,
            type: CHAR_TYPES.NUMBER,
        },
        AGILITY: {
            label: 'Agility',
            default: 0,
            type: CHAR_TYPES.NUMBER
        },
        CONSTITUTION: {
            label: 'Constitution',
            default: 0,
            type: CHAR_TYPES.NUMBER
        },
        POWER: {
            label: 'Power',
            default: 0,
            type: CHAR_TYPES.NUMBER,
        },
        LEVEL: {
            label: 'Level',
            default: 0,
            type: CHAR_TYPES.NUMBER
        },
        PASSIVE_SKILL_POINTS: {
            label: 'PassiveSkillPoints',
            default: 0,
            type: CHAR_TYPES.NUMBER
        },
        CURRENT_XP: {
            label: 'CurrentXP',
            default: '0',
            type: CHAR_TYPES.STRING
        },
        REMAINING_STATS_POINTS: {
            label: 'RemainingStatsPoints',
            default: 0,
            type: CHAR_TYPES.NUMBER
        },
        GOLD: {
            label: 'Gold',
            default: '0',
            type: CHAR_TYPES.STRING
        },
        PRIMORDIAL_AFFINITY: {
            label: 'PrimordialAffinity',
            default: '0',
            type: CHAR_TYPES.STRING
        },
        IS_AUTODASH_AVAILABLE: {
            label: 'IsAutoDashAvailable',
            default: 1,
            hidden: true,
            type: CHAR_TYPES.NUMBER
        },
        DASH_STATUS_ACTIVATION: {
            label: 'DashStatusActivation',
            default: 1,
            hidden: true,
            type: CHAR_TYPES.NUMBER
        }
    }
};