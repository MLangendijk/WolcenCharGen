import { UTILS } from './src/utils';
import { STATS, BASE_STATS } from './src/stats';
let output;

const app = {
    start: function () {
        output = document.createElement('div');
        output.id = 'output';
        document.body.appendChild(output);

        this.generateFields();
    },

    generateFields: function () {
        Object.keys(STATS).forEach(stat => {
            output.appendChild(UTILS.createStat(STATS[stat], stat));
        });
    }
};

document.addEventListener('DOMContentLoaded', app.start.bind(app));