import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';
// import SearchBar from './search-bar'
import { Link } from 'react-router-dom';
import { Grid, Col, Media } from 'react-bootstrap';

class Home extends Component {
    renderArticleList() {
        
        const articles = _.map(this.props.articles, (article) => {
            // const time = article.date.substring(0,10);
            return article;
        })
        const reverseArticles = articles.reverse();

        return reverseArticles.map(article => {
            const time = article.date.substring(0,10);
            if(article.id > reverseArticles.length - 5) {
                return (
                    <Link to={`${article.id}`} key={article.id} className="list-group-item">
                        <a><h2><Link to={`${article.id}`}>{article.title}</Link></h2></a>
                        <h5>{time}</h5>
                        <img class="articleImage" src={(`${article.image}`)} />
                    </Link>
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
                
                <Col md={12} className="list-group">
                    <ul className="listContainer">
                        {this.renderArticleList()}
                    </ul>
                </Col>
        
        )
    }
}

function mapStateToProps(state) {
    return { articles: state.articles};
}

// export default Home;
export default connect(mapStateToProps, { fetchArticles })(Home);