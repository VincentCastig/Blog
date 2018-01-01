import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    renderArticleList() {
        return this.props.articles.map( (article) => {
            return (
            <li key={article.title} className="list-group-item">{article.title}</li>
            )
        })
    }
    render() {
        return (
            <ul>
                {this.renderArticleList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return { articles: state.articles}
}

export default connect(mapStateToProps)(Home);