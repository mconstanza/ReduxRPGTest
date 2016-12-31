import {combineReducers} from 'redux';

const player = (state = {
    player: {
        id: 1,
        HP: 100,
        maxHP: 100
    }
}, action) => {
    switch (action.type) {
      
        default:
            return state
    }
}

const enemy = (state = {
    enemy: {
        id: 1,
        HP: 100,
        maxHP: 100
    }
}, action) => {
    switch (action.type) {
        case 'PLAYER_ATTACK':
        console.log('State :' + JSON.stringify(state));
            return {
              ...state,
              HP: state.HP - action.attack,
              alive: action.alive
            }
        default:
            return state
    }
}

const rpgApp = combineReducers({player: player, enemy: enemy})

export default rpgApp;
