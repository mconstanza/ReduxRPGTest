import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import rpgApp from './reducers/rpgApp';
import App from './components/App';

const logger = createLogger();
const initialState ={
  player:{
    id: 1,
    name: 'Mario',
    HP: 100,
    maxHP: 100,
    str: 10,
    crit: 10,
    critMod: 1.5,
    alive: true,
    spells: [
      // fireball: insertFireballHere,
      // pocketMushroom: insertHealHere
    ]
  },
  enemies: [
     {
      name: 'Doosh',
      id: 1,
      HP: 120,
      maxHP: 120,
      str: 8,
      alive: true
    }
  ]
}
let store = createStore(rpgApp, initialState,
applyMiddleware(thunk, promise, logger)
);

console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
