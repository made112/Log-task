import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { Provider } from 'mobx-react';
import AuthinticateStore from './stores/authStore';

const Root = (
  <Provider AuthinticateStore={AuthinticateStore} >
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));

