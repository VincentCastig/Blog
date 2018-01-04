import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../Components/about';
import Contact from '../Components/contact';
import Home from '../Components/home';
import Fitness from '../Components/fitness';

const Routes = () => <h1>404</h1>;

export default (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/fitness" component={Fitness}></Route>
        <Route path="/fitness/:id" component={Fitness}></Route>
        <Route component={Routes}></Route>
    </Switch>
);