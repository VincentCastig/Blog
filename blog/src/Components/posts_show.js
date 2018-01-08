import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneArticle } from '../actions';

class PostsShow extends Component {
        
    
        componentDidMount() {
            const {id} = this.props.match.params;
            this.props.fetchOneArticle();
        }
    
        render() {
            const { post } = this.props;

            if(!post) {
                return <div>Nothing Yet</div>
            }
            
            return (
                <div className="listContainer">
                    <h3>{post.title}</h3>
                    <h6>{post.category}</h6>
                    <p>{post.content}</p>
                </div>
            );
        }
    }
    
    function mapStateToProps( {posts}, ownProps ) {
        return { post: posts[ownProps.match.params.id] };
    }
    
    export default connect(mapStateToProps, { fetchOneArticle })(PostsShow);
