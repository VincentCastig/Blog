import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions';
import { Link } from 'react-router-dom';

class BookReviews extends Component {
    renderArticleList() {
        return _.map(this.props.articles, (article) => {
            if(article.category == 'Book Reviews') {
            return (
            // <li key={article.id} className="list-group-item">
            <Link key={article.id} to={`post/${article.id}`} className="list-group-item">
                <a><h2><Link to={`post/${article.id}`}>{article.title}</Link></h2></a>
                <img class="articleImage" src={(`${article.image}`)} />
            </Link>
            // </li>
            )
            }
        })
    }

    componentDidMount() {
        this.props.fetchArticles();
    }

    render() {
        // console.log(this.props.articles);
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
    // console.log('state', state);
    return { articles: state.articles};
}

// export default Home;
export default connect(mapStateToProps, { fetchArticles })(BookReviews);