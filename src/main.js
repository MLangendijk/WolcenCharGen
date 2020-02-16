(function () {
    let output;

    const STATS = {
        STRENGTH: 'Strength',
        AGILITY: 'Agility',
        CONSTITUTION: 'Constitution',
        POWER: 'Power',
        LEVEL: 'Level',
        PASSIVE_SKILL_POINTS: 'PassiveSkillPoints',
        CURRENT_XP: 'CurrentXP',
        REMAINING_STATS_POINTS: 'RemainingStatsPoints',
        GOLD: 'Gold',
        PRIMORDIAL_AFFINITY: 'PrimordialAffinity',
        IS_AUTODASH_AVAILABLE: 'IsAutoDashAvailable',
        DASH_STATUS_ACTIVATION: 'DashStatusActivation'
    };

    const BASE_STATS = {
        NAME: 'Name',
        PLAYER_ID: 'PlayerId',
        CHARACTER_ID: 'CharacterId',
        DIFFICULTY_MODE: 'DifficultyMode',
        LEAGUE: 'League',
        UPDATED_AT: 'UpdatedAt'
    };

    const character = {

    };

    const UTILS = {
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
})();