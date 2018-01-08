import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';
import { Link } from 'react-router-dom';

class Home extends Component {
    renderArticleList() {
        return _.map(this.props.articles, (article) => {
            return (
            <li key={article.id} className="list-group-item">
                <a><h2><Link to="Fitness">{article.title}</Link></h2></a>
                <img class="articleImage" src={(article.content)} />
            </li>
            )
        })
    }

    componentDidMount() {
        this.props.fetchArticles();
    }

    render() {
        console.log(this.props.articles);
        return (
            <div className="listContainer">
                <ul>
                    {this.renderArticleList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { articles: state.articles};
}

export default connect(mapStateToProps, { fetchArticles })(Home);