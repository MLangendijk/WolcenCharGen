import { UTILS } from './src/utils';
import Character from './src/character/character';
let output;

const app = {
    character: null,

    start: function () {
        output = document.createElement('div');
        output.id = 'output';
        document.body.appendChild(output);

        this.character = new Character();
        this.generateFields();
    },

    generateFields: function () {
        const stats = this.character.getInitialStats();

        stats.forEach(stat => {
            if (!stat.hidden) {
                if (stat.type === 'select') {
                    output.appendChild(UTILS.createSelect(stat));
                } else {
                    output.appendChild(UTILS.createInput(stat));
                }
            }
        });

        const button = document.createElement('button');
        button.addEventListener('click', this.character.exportJSON.bind(this.character));
        button.innerText = 'Save';

        output.appendChild(button);
    }
};

document.addEventListener('DOMContentLoaded', app.start.bind(app));