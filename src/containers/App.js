import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import Commissions from './Commissions';
import Contact from './Contact';
import Home from './Home';
import StandardPage from './StandardPage';
import EpkPage from './EpkPage';

var data = require('../data/mockdata.json');

const App = () => [
    <Switch>
        <Route exact path='/' component={() => <Home menuList={data.menu}/>}/>
        <Route exact path='/projects' component={() => <Projects menuList={data.menu}/>}/>
        <Route exact path='/projects/fullcode' component={() => <StandardPage inputData={data.fullcode} menuList={data.menu} media={data.fullcode.media}/>}/>
        <Route exact path='/projects/challengehaus' component={() => <StandardPage inputData={data.challenge_haus} menuList={data.menu} media={data.challenge_haus.media}/>}/>
        <Route exact path='/projects/assembly' component={() => <StandardPage inputData={data.assembly} menuList={data.menu} media={data.assembly.media}/>}/>
        <Route exact path='/projects/brainstare.manatorquim' component={() => <StandardPage inputData={data.brainstare_manatorquim} menuList={data.menu} media={data.brainstare_manatorquim.media}/>}/>
        <Route exact path='/commissions' component={() => <Commissions menuList={data.menu}/>}/>
        <Route exact path='/commissions/totalinternalreflection' component={() => <StandardPage inputData={data.tir} menuList={data.menu} media={data.tir.media}/>}/>
        <Route exact path='/commissions/beyondrefuge' component={() => <StandardPage inputData={data.beyond_refuge} menuList={data.menu} media={data.beyond_refuge.media}/>}/>
        <Route exact path='/commissions/untitleddream' component={() => <StandardPage inputData={data.untitled_dream} menuList={data.menu} media={data.untitled_dream.media}/>}/>
        <Route exact path='/commissions/returner' component={() => <StandardPage inputData={data.returner} menuList={data.menu} media={data.returner.media}/>}/>
        <Route exact path='/contact' component={() => <Contact menuList={data.menu}/>}/>
        <Route exact path='/epk' component={() => <EpkPage inputData={data.epk} menuList={data.menu} media={data.epk.media}/>}/>
    </Switch>
]

export default App;

