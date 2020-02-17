import ACTS from './acts';

export default {
    saveType: 'Progression',
    label: 'LastPlayed',
    fields: ACTS,
    type: 'select',
    allowMultiple: false,
    saveAs: function (data) {
        const act = ACTS.filter(act => act.Name === data)[0];

        return {
            QuestId: act.Name,
            StepId: act.Step
        }
    }
}