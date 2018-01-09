import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    
        componentDidMount() {
            const { id } = this.props.match.params;
            console.log('id', id)
            console.log('this.props in componentDidMount', this.props);
            this.props.fetchPost(id);
        }
    
        render() {
            const { post } = this.props;
            console.log('render post', post);
            console.log('post', this.props);
            if(!post) {
                return <div>Nothing Yet</div>
            }
           
            return (
                <div className="listContainer">
                    <h3>{post.title}</h3>
                    <h6>{post.category}</h6>
                    {/* <p>{post.content}</p> */}
                    <img class="articleImage" src={(post.content)} />
                </div>
            );
        }
        
    }
    
    function mapStateToProps( posts  , ownProps ) {
        console.log('posts',posts.articles[ownProps.match.params.id]);
        console.log('ownProps', ownProps)
        return { post: posts.articles[ownProps.match.params.id] };
    }
    
    export default connect(mapStateToProps, { fetchPost })(PostsShow);
