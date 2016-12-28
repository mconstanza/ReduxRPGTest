// Action Creators

export function addPlayerHP(player, HP) {
  return { type: 'ADD_PLAYER_HP', player, HP: HP}
}

export function reducePlayerHP(player, HP) {
  return { type: 'REDUCE_PLAYER_HP', player, HP: HP}
}
