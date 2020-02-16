const skills = [
    'player_aetherblade',
    'player_arrowsrain',
    'player_bladeslinger',
    'player_bomb',
    'player_brutalstrike',
    'player_bulleye',
    'player_chainlightning',
    'player_charge',
    'player_corpseexplosion',
    'player_deathmark',
    'player_dualstrike',
    'player_fireball',
    'player_frostnova',
    'player_frostcomet',
    'player_frostlance',
    'player_hammer',
    'player_hook',
    'player_ironguard',
    'player_laceration',
    'player_laser',
    'player_leap',
    'player_possession',
    'player_reave',
    'player_ringofpain',
    'player_sacredground',
    'player_smokebomb',
    'player_sniper',
    'player_solarfall',
    'player_spreadshot',
    'player_summon_champion',
    'player_summon_melee',
    'player_summon_ranged',
    'player_teleport',
    'player_turret',
    'player_vault',
    'player_vortex',
    'player_warcry',
    'player_whirlwind'
];

let unlockedSkills = [];

skills.forEach(skill => {
    unlockedSkills.push({
        'SkillName': skill,
        'Level': 1,
        'CurrentXp': '0',
        'Variants': '0000000000000000'
    });
});

export default {
    label: 'UnlockedSkills',
    fields: unlockedSkills,
    hidden: true
};