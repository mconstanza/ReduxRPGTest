import { combineReducers } from 'redux';

function player(state = [], action) {
  switch (action.type) {
    case ADD_HP:
      return [
        ...state,
        {
          player.HP: state.player.HP + action.HP
        }
      ]
    case REDUCE_HP:
    return [
      ...state,
      {
        player.HP: state.player.HP - action.HP
      }
    ]
    default:
      return state
  }
}

const rpgApp = combineReducers({

})

export default rpgApp;
