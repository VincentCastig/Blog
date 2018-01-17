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
            else if(post.category === 'Book Reviews') {
                return (
                    <div className="show-post-item">
                        <h3>{post.title}</h3>
                        <Link to={`/BookReviews` }><h4>{post.category}</h4></Link>
                    {/* <p>{post.content}</p> */}
                        <img class="articleImage" src={(`${post.image}`)} />
                        <p>{post.content}</p>
                </div>
                )
            }
           
            return (
                <div className="show-post-item">
                    <h3>{post.title}</h3>
                    <Link to={`/${post.category}` }><h4>{post.category}</h4></Link>
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
