import { UTILS } from './src/utils';
import { STATS, BASE } from './src/stats';
let output;

const app = {
    start: function () {
        output = document.createElement('div');
        output.id = 'output';
        document.body.appendChild(output);

        this.generateFields();
    },

    generateFields: function () {
        Object.keys(BASE).forEach(stat => {
            if (BASE[stat].hidden) {
                return;
            }

            output.appendChild(UTILS.createStat(BASE[stat], stat));
        });

        Object.keys(STATS).forEach(stat => {
            if (STATS[stat].hidden) {
                return;
            }

            output.appendChild(UTILS.createStat(STATS[stat], stat));
        });
    }
};

document.addEventListener('DOMContentLoaded', app.start.bind(app));