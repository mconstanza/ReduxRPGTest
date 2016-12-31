// Action Creators

import * as RPG from '../RPG';

export function playerAttack(player, enemy) {
    var playerObj = player;
    var enemyObj = enemy;

    // calculate the player's attack against the enemy
    if (Math.floor(Math.random() * 100) <= player.crit) {
        var crit = player.critMod;
    } else {
        var crit = 1;
    }

    var attack = (playerObj.str * crit);

    // check if the attack will kill the enemy
    if (enemy.HP - attack <= 0) {
        var alive = false
    } else {
        var alive = true
    }

    return {type: 'PLAYER_ATTACK', attack, alive}
}

export function fight(player, enemies) {
    player,
    enemies = RPG.playerAttack(player, enemies);
    for (var i = 0; i < enemies.length; i++) {
        if (player.hp > 0) {
            player,
            enemies[i] = RPG.enemyAttack(player, enemies[i]);
        } else {
            // logic for player death
        };
    }

    return {type: 'FIGHT', player, enemies}
}
