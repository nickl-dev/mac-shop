import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// Redux
import bagReducer from 'redux/reducers/bagReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(bagReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
