const apocalypticData = [
    {
        "Name": "mage"
    },
    {
        "Name": "rogue"
    },
    {
        "Name": "warrior"
    }
];

export default {
    label: 'ApocalypticData',
    fields: apocalypticData,
    type: 'select',
    saveAs: function (selected) {
        return {
            'ChosenType': selected,
            'UnlockedTypes': apocalypticData.map(a => {

                // Good good because of the damn Name in Progression.
                return {
                    'Type': a.Name
                }
            })
        }
    }
}