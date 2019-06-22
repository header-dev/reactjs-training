import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Stateless_App from './Stateless_App';
import StatelessFullApp from './StatelessFullApp';
import ClassComponent from './ClassComponent';
import StateApp from './StateApp';
import ChangeStateApp from './ChangeStateApp';
import PropsApp from './PropsApp';
import DefaultProps from './DefaultProps';
import StateAndPropsApp from './StateAndPropsApp';
import PropsValidationApp from './PropsValidationApp';
import SetStateApp from './SetStateApp';
import SetStateApp2 from './SetStateApp2';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SetStateApp2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
