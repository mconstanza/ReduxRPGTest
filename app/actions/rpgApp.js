


export const ADD_HP = 'ADD_HP';
export const REDUCE_HP = 'REDUCE_HP';


// Action Creators

export function addHP(character) {
  return { type: ADD_HP, character}
}

export function reduceHP(character) {
  return { type: REDUCE_HP, character}
}
