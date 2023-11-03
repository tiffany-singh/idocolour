import React from 'react';
import { HashRouter,Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import Commissions from './Commissions';
import Contact from './Contact';
import Home from './Home';
import StandardPage from './StandardPage';
import EpkPage from './EpkPage';

var data = require('../data/mockdata.json');

const App = () => [
    <HashRouter>
        <Switch>
            <Route exact path='/' component={() => <Home menuList={data.menu}/>}/>
            <Route exact path='/about' component={() => <Projects menuList={data.menu}/>}/>
            <Route exact path='/contact' component={() => <Contact menuList={data.menu}/>}/>
        </Switch>
    </HashRouter>
]

export default App;

