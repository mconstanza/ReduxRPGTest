// RPG.js - API of rpg combat-based commands for use in actions
export function playerTurn(player, enemy) {
  var playerObj = player;
  var enemyObj = enemy;

// calculate the player's attack against the enemy
    if (Math.floor(Math.random() * 100) <= player.crit) {
      var crit = player.critMod;
    }else {
      var crit = 1;
    }

    var attack = (playerObj.str * crit);

// check if the attack will kill the enemy
    if (enemy.HP - attack <= 0) {
      var alive = false
    }
    else {
      var alive = true
    }


  return { type: 'PLAYER_ATTACK', attack, alive }
}

export function enemyTurn(player, enemy) {
  var playerObj = player;
  var enemyObj = enemy;

// calculate the player's attack against the enemy
    if (Math.floor(Math.random() * 100) <= player.crit) {
      var crit = player.critMod;
    }else {
      var crit = 1;
    }

    var attack = (playerObj.str * crit);

// check if the attack will kill the enemy
    if (enemy.HP - attack <= 0) {
      var alive = false
    }
    else {
      var alive = true
    }


  return { type: 'PLAYER_ATTACK', attack, alive }
}
