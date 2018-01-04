import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';
import { Link } from 'react-router-dom';

class Home extends Component {
    renderArticleList() {
        return this.props.articles.map( (article) => {
            return (
            <li key={article.title} className="list-group-item">
                <a><h2>{article.title}</h2></a>
            </li>
            )
        })
    }
    render() {
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
    return { articles: state.articles}
}

export default connect(mapStateToProps)(Home);