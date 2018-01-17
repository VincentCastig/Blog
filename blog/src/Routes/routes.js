import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../Components/about';
import Contact from '../Components/contact';
import Home from '../Components/home';
import Fitness from '../Components/Categories/fitness';
import BookReviews from '../Components/Categories/book-reviews';
import Cooking from '../Components/Categories/cooking';
import Programming from '../Components/Categories/programming';
import PostArticle from '../Components/post-article';
import PostsShow from '../Components/posts_show';

const Routes = () => <h1>404</h1>;

export default (
    <Switch>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/fitness/:id" component={Fitness}></Route>
        <Route path="/programming" component={Programming}></Route>
        <Route path="/cooking" component={Cooking}></Route>
        <Route path="/bookreviews" component={BookReviews}></Route>
        <Route path="/fitness" component={Fitness}></Route>
        <Route path="/:id" component={PostsShow}></Route>
        <Route path="/post" component={PostArticle}></Route>
        <Route exact path="/" component={Home}></Route>  
        <Route component={Routes}></Route>
    </Switch>
);