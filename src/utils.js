import {CHAR_TYPES} from "./chartypes";

export const UTILS = {
    createStat: function (data, id) {
        let stat = document.createElement('div'),
            label = document.createElement('span'),
            input = document.createElement('input');

        stat.appendChild(label);
        stat.appendChild(input);
        input.id = id;
        label.innerText = data.label;
        input.value = data.default;
        input.type = data.type === CHAR_TYPES.STRING ? 'text' : 'number';

        return stat;
    }
};