import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fbDataRequest } from './services/fbDataRequest';


export class FbProfile extends Component {
    state = {
       token: this.props.fbToken,
       Loading: true,
       userID: '',
       name: '',
       email:'',
       picture: '',
       errors: { }
    };

    componentDidMount() {
        this.loadProfile();
    }

    async loadProfile() {
        const response = await this.getProfileData(this.state.token);

        if (!this.state.errors.hasOwnProperty('fbProfile')){
            this.setState({ 
                userID: response.userID,
                name: response.name,
                email: response.email,
                picture: response.picture.data.url,
                Loading: false
             });
        }
    }

    async getProfileData(token) {
        
        // ---  Wrong token example for tests --- 
        // let token_extra = 'EAAPnCOzlPwkBABRTIEuUg0OFNdFuQNcDPXmMN1GqPFEyM2dZBx8XlY2geBgIyqcPnKmYTdVYXl8jOn6gLeYIVb4veebVZAZBq9fZAsB7kJOVKfCiNC23BJwsEgsXEtXRdLCB0EWtXZCQuG8NfKHgSQ34HSNQY812l63WRaZB7TncqBrZAxQjSexS0bKyLuohAfF9elRvBiNen2GIOlfKH6N'
        const fields = "id,name,email,picture";
        const request = await fbDataRequest(token,fields);

        // --- Check for errors --- 
        const errors = {};
        if (request.hasOwnProperty('error')){

            errors.fbProfile = request.error.message;
        }
        this.setState({ errors });
        
        return request;
    }



    render(){
        let Content;

        if (this.state.Loading){
            Content = (
                <div>
                    <h1> Loading... </h1>
                </div>
            );
        } else {
            Content = (
                <div>
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h2>Welcome {this.state.name}</h2>
                    User email: {this.state.email}
              </div>
            )
            
        }

        return (
            <div>
                {Content}
            </div>
    
        );
    }

}

FbProfile.propTypes = {
    fbToken: PropTypes.string.isRequired
};
  


export default FbProfile;
