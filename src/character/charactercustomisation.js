import {CHAR_TYPES} from "./chartypes";

export default {
    label: 'CharacterCustomisation',
    fields: {
        SEX: {
            label: 'Sex',
            default: 0,
            hidden: true,
            type: CHAR_TYPES.NUMBER
        },
        FACE: {
            label: 'Face',
            default: 0,
            hidden: true,
            type: CHAR_TYPES.NUMBER
        },
        SKIN_COLOR: {
            label: 'SkinColor',
            default: 302,
            hidden: true,
            type: CHAR_TYPES.NUMBER
        },
        HAIRCUT: {
            label: 'Haircut',
            default: 5,
            hidden: true,
            type: CHAR_TYPES.NUMBER
        },
        HAIR_COLOR: {
            label: 'HairColor',
            default: 3,
            hidden: true,
            type: CHAR_TYPES.NUMBER
        },
        BEARD: {
            label: 'Beard',
            default: 3,
            hidden: true,
            type: CHAR_TYPES.NUMBER
        },
        BEARD_COLOR: {
            label: 'BeardColor',
            default: 3,
            hidden: true,
            type: CHAR_TYPES.NUMBER
        },
        LEFT_EYE: {
            label: 'LeftEye',
            default: 3,
            hidden: true,
            type: CHAR_TYPES.NUMBER
        },
        RIGHT_EYE: {
            label: 'RightEye',
            default: 3,
            hidden: true,
            type: CHAR_TYPES.NUMBER
        },
        ARCHETYPE: {
            label: 'Archetype',
            default: 1,
            hidden: true,
            type: CHAR_TYPES.NUMBER
        }
    },
    hidden: true
};