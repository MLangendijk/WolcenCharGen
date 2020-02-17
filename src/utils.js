import {CHAR_TYPES} from "./character/chartypes";

export const UTILS = {

    /**
     * Creates the input fields based on a stat type.
     *
     * @param {Object} data - The data.
     * @param {string} data.label - The data label.
     * @param {Object} data.fields - The data fields.
     */
    createInput: function (data) {
        const output = document.createElement('div');
        const fields = data.fields;
        const label = document.createElement('span');
        const fieldWrapper = document.createElement('div');

        label.innerHTML = data.label;
        fieldWrapper.classList.add('wrapper');
        output.classList.add('stattype');

        output.appendChild(label);
        output.appendChild(fieldWrapper);
        let added = 0;

        Object.keys(fields).forEach(stat => {
            if (fields[stat].hidden) {
                return;
            }

            fieldWrapper.appendChild(UTILS.createStat(fields[stat], stat));
            added++;
        });

        if (!added) {
            output.classList.add('hidden');
        }

        return output;
    },

    createSelect: function (data) {
        const output = document.createElement('div');
        const fields = data.fields;
        const label = document.createElement('span');
        const select = document.createElement('select');

        label.innerHTML = data.label;
        output.classList.add('stattype');

        output.appendChild(label);
        output.appendChild(select);
        select.id = data.label;

        fields.forEach(field => {
            const option = document.createElement('option');
            option.value = field.Name;
            option.text = field.Name;
            select.appendChild(option);
        });

        if (data.allowMultiple) {
            select.multiple = true;
        }

        return output;
    },

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