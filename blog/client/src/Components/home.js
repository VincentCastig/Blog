import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';
// import SearchBar from './search-bar'
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

class Home extends Component {
    renderArticleList() {
        console.log(articles)
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
                        <h2>{article.title}</h2>
                        <h5>{time} - by Vincent Castigliola III</h5>
                        <img className="articleImage" src={(require(`../img/${article.title}.${article.image}`))} alt={`${article.title}`}/>
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
                
                <Col className="list-group">
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