import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rpgApp from './reducers/rpgApp';
import App from './components/App';

let store = createStore(rpgApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
