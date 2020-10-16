import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import AppContext from "./components/AppContext"

// import { Provider } from 'react-redux';
// import store from './store'
const defaultValue = {user:{}}






ReactDOM.render(
  <AppContext.Provider
  value={defaultValue}>
    <App/>
    </AppContext.Provider>,
  
  document.getElementById('root')
);
