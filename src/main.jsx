import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './App.jsx';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'reduxState/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
