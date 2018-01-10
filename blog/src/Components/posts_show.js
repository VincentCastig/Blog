import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
    
        componentDidMount() {
            const { id } = this.props.match.params;
            this.props.fetchPost(id);
        }
    
        render() {
            const { post } = this.props;
            if(!post) {
                return <div>Loading...</div>
            }
           
            return (
                <div className="listContainer">
                    <h3>{post.title}</h3>
                    <Link to="/fitness"><h6>{post.category}</h6></Link>
                    {/* <p>{post.content}</p> */}
                    <img class="articleImage" src={(`${post.image}`)} />
                    <p>{post.content}</p>
                </div>
            );
        }
        
    }
    
    function mapStateToProps( posts  , ownProps ) {
        return { post: posts.articles[ownProps.match.params.id] };
    }
    
    export default connect(mapStateToProps, { fetchPost })(PostsShow);
