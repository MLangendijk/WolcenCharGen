export const UTILS = {
    createStat: function (labelValue, id) {
        let stat = document.createElement('div'),
            label = document.createElement('span'),
            input = document.createElement('input');

        stat.appendChild(label);
        stat.appendChild(input);
        input.id = id;
        label.innerText = labelValue;

        return stat;
    }
};