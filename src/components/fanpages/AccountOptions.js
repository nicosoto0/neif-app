import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fbDataRequest } from '../utils/services/fbDataRequest';
import { Form, Button } from "semantic-ui-react";
import DisplayPosts from "../utils/DisplayPosts";
import DisplayPost from "../utils/DisplayPost";


export class AccountOptions extends Component {

    constructor(props){
        super(props);
        this.SubmitPosts = this.SubmitPosts.bind(this);
        this.SubmitPost = this.SubmitPost.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.state = {
            account: this.props.account,
            numPosts: 0,
            idPost: '',
            displayOption: 0,
            loadingPosts: false,
            loadingPost: false,
            dataPosts: {},
            dataPost: {}
        };
    }


    async getAccoutData(token, fields){
        const request = await fbDataRequest(token, fields);
        const errors = {};
        if (request.hasOwnProperty('error')){

            errors.fbAccount = request.error.message;
        }
        this.setState({ errors });

        return request;
    }

    async getPosts(num){
        const fields= `posts.limit(${num}){created_time,likes.summary(true).filter(stream),comments.summary(true).filter(stream)}`;

        const response = await this.getAccoutData(this.state.account.access_token, fields);
        
        if (!this.state.errors.hasOwnProperty('fbAccount')){
            this.setState({ 
                dataPosts: response.posts.data,
                loadingPosts: false,
                displayOption: 1
             });
        }
    }

    getPost(idPost){
        this.setState({ 
            displayOption: 2
         });
    }

    onChangePosts = e =>
    this.setState({
      numPosts: e.target.value
    });
    
    onChangePost = e =>
    this.setState({
        idPost: e.target.value
    })
    

    SubmitPosts = () => {
        this.setState({ loadingPosts: true });
        this.getPosts(this.state.numPosts);
        
    }

    SubmitPost() {
        this.getPost(this.state.idPost);
        
    }

    handleBack(){
        this.setState({
            displayOption: 0,
            numPosts: 0,
            idPost: '',
        });
    }


    render() {

        let formPosts = (
            <Form id="Posts" onSubmit={this.SubmitPosts} loading={this.loadingPosts}>

            <Form.Field>
            <label htmlFor="email">Insert Max of Posts to analysis</label>
              <input
                type="number"
                id="posts"
                name="posts"
                placeholder="Enter small amount"
                value={this.state.numPosts}
                onChange={this.onChangePosts}
                required
              />
            </Form.Field>
            <Button primary>Get</Button>
          </Form>
        );

        let formPost = (
            <Form id="Post" onSubmit={this.SubmitPost} loading={this.loadingPost}>

            <Form.Field>
            <label htmlFor="email">Id Specific Post</label>
              <input
                type="string"
                id="post"
                name="post"
                placeholder="Enter id post"
                value={this.state.idPost}
                onChange={this.onChangePost}
                required
              />
            </Form.Field>
            <Button primary>Get</Button>
          </Form>
        );

        let Content;

        if (this.state.displayOption === 0){
            Content = (
                <div>
                    {formPosts}
                    <br />
                    {formPost}
                </div>
            )
        } else if (this.state.displayOption === 1){
            Content = (
                <div>
                    <DisplayPosts posts={this.state.dataPosts} />
                    <br />
                    <Button onClick={this.handleBack}>Back</Button>
                </div>
            )
        } else if (this.state.displayOption === 2){
            Content = (
                <div>
                    <DisplayPost />
                    <br />
                    <Button onClick={this.handleBack}>Back</Button>
                </div>
            )
        }


        return (
            <div>
                <h1>{this.state.account.name} </h1>
                {Content}
            </div>
        );
    }


}

AccountOptions.propTypes = {
    account: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        access_token: PropTypes.string.isRequired
      })
};
  


export default AccountOptions;
