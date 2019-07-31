import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class DisplayPosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: this.props.posts
        };
    }

    render(){
        return (
            <div align="left">
                <h3>Posts</h3>
                <ul>
                    {this.state.posts.map((post, i) => {
                        return (
                            <li key={i}>
                                ID: {post.id}
                                    <ul>
                                    <li>Created Time: {post.created_time}</li>
                                    <li>Number of Comments: {post.comments.summary.total_count}</li>
                                    <li>Number of Likes: {post.likes.summary.total_count}</li>
                                    </ul>
                                    
                            </li>

                        );
                    })
                    }
                </ul>
            </div>
        )
    }
}


DisplayPosts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        comments: PropTypes.shape({
            summary: PropTypes.shape({
                total_count: PropTypes.number.isRequired
            }).isRequired,
        }).isRequired,
        likes: PropTypes.shape({
            summary: PropTypes.shape({
                total_count: PropTypes.number.isRequired
            }).isRequired,
        }).isRequired,
        created_time: PropTypes.string.isRequired
    })).isRequired
};

export default DisplayPosts;
