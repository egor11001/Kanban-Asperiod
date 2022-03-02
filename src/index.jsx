import React from 'react';
import ReactDOM from 'react-dom';
import App from './core/App';
import { Provider } from 'react-redux';
import configureStore from './core/redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
