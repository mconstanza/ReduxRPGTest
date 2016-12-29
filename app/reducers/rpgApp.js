import {combineReducers} from 'redux';

const player = (state = {
    player: {
        id: 1,
        HP: 100,
        maxHP: 100
    }
}, action) => {
    switch (action.type) {
        case 'ADD_PLAYER_HP':
            return {
                ...state,
                HP : state.HP + action.HP
            }

        case 'REDUCE_PLAYER_HP':
            return {
                ...state,
                HP: state.HP - action.HP
            }

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
        case 'ADD_ENEMY_HP':
            return
            {
                HP : state.HP + action.HP
            }

        case 'REDUCE_ENEMY_HP':
            return
            {
                HP : state.HP - action.HP
            }

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
