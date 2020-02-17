import ACTS from './acts';

export default {
    saveType: 'Progression',
    label: 'QuestProgress',
    fields: ACTS,
    type: 'select',
    allowMultiple: true,
    saveAs: function (selectedOptions) {
        return ACTS.filter(act => selectedOptions.includes(act.Name));
    }
};