import React from 'react';
import ReactDOM from 'react-dom';
import Reto12 from './Reto12.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Reto12 />
    </Provider>
  </React.StrictMode>
);

