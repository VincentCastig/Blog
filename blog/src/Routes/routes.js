import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../Components/About';
import Contact from '../Components/Contact';
import Home from '../Components/Home';
import Fitness from '../Components/Fitness';
import PostArticle from '../Components/post-article';
import PostsShow from '../Components/posts_show';

const Routes = () => <h1>404</h1>;

export default (
    <Switch>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/fitness/:id" component={Fitness}></Route>
        <Route path="/fitness" component={Fitness}></Route>
        <Route path="/post/:id" component={PostsShow}></Route>
        <Route path="/post" component={PostArticle}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route component={Routes}></Route>
    </Switch>
);