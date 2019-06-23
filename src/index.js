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
import ForceUpdateStateApp from './ForceUpdateStateApp'
import FindDomNodeApp from './FindDomNodeApp'
import FormApp from './FormApp'
import CompactApp from './CompactApp'
import HandleFormApp from './HandleFormApp'
import EventApp from './EventApp'
import RenderListApp from './RenderListApp'
import HigherOrderApp from './HigherOrderApp'

import * as serviceWorker from './serviceWorker';


import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'

const routing = (
    <Router>
        <div>
            <h1>Kritawit Bunket Training</h1>
            <ul>
                <li>
                    <NavLink to="/" exact activeStyle={
                        {color: 'red'}
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" exact activeStyle={
                        {color: 'green'}
                    }>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" exact activeStyle={
                        {color: 'magenta'}
                    }>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
)


ReactDOM.render(<HigherOrderApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
