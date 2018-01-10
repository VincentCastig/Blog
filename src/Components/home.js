import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';
import { Link } from 'react-router-dom';
import { Grid, Col, Media } from 'react-bootstrap';

class Home extends Component {
    renderArticleList() {
        
        return _.map(this.props.articles, (article) => {
            const time = article.date.substring(0,10);
            return (
            <Link to={`post/${article.id}`} key={article.id} className="list-group-item">
                <a><h2><Link to={`post/${article.id}`}>{article.title}</Link></h2></a>
                <p>{time}</p>
                <img class="articleImage" src={(`${article.image}`)} />
            </Link>
            )
        })
    }

    componentDidMount() {
        this.props.fetchArticles();
    }

    render() {
        // console.log(this.props.articles);
        return (
            
                <Col md={9} className="list-group">
                    <ul className="listContainer">
                        {this.renderArticleList()}
                    </ul>
                </Col>
        
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return { articles: state.articles};
}

// export default Home;
export default connect(mapStateToProps, { fetchArticles })(Home);