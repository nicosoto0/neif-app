import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import { checkFBToken } from './services/checkFBToken';
import { connect } from 'react-redux';
import InlineError from "../messages/InlineError";
import { Button } from 'semantic-ui-react'

export class Facebook extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: this.props.LoggedInFb,
            token: '',
            errors: {}
        };
    }

    componentDidMount() {

        this.checkValidToken(this.props.fb_toke);

      }


    async checkValidToken(token) {
        
        // ---  Wrong token example for tests --- 
        // let token_extra = 'EAAPnCOzlPwkBABRTIEuUg0OFNdFuQNcDPXmMN1GqPFEyM2dZBx8XlY2geBgIyqcPnKmYTdVYXl8jOn6gLeYIVb4veebVZAZBq9fZAsB7kJOVKfCiNC23BJwsEgsXEtXRdLCB0EWtXZCQuG8NfKHgSQ34HSNQY812l63WRaZB7TncqBrZAxQjSexS0bKyLuohAfF9elRvBiNen2GIOlfKH6N'
        const request = await checkFBToken(token);

        // --- Check for errors --- 
        const errors = {};
        if (request.hasOwnProperty('error')){

            errors.fbLogin = request.error.message;
        }
        this.setState({ errors });

        if (this.state.errors.hasOwnProperty('fbLogin')){
            localStorage.removeItem('neif_analytics');
            this.setState({
                isLoggedIn: false,
                token: ''
            });
        }

    }

    async useResponse(response){

        if (response.hasOwnProperty('accessToken')){
            await this.checkValidToken(response.accessToken);
            if (this.state.errors.hasOwnProperty('fbLogin')){
                localStorage.removeItem('neif_analytics');
                this.setState({
                    isLoggedIn: false,
                    token: ''
                });

            } else {
                localStorage.neif_analytics = response.accessToken;
                this.setState({
                    isLoggedIn: true,
                    token: response.accessToken
                });
            }

        } else {
            localStorage.removeItem('neif_analytics');
            this.setState({
                isLoggedIn: false,
                token: ''
            });
        }


    }

    responseFacebook = response => {
        this.useResponse(response);
      }


    render(){
        let fbContent;

        const errors = this.state.errors;


        if (!this.state.isLoggedIn){
            fbContent = (
            <div>
                <h1>Fb Login Page </h1>

                <FacebookLogin
                    appId="398941727624478"
                    autoLoad={true}
                    fields="name,email,picture,accounts"
                    callback={this.responseFacebook} /> <br/>
                {errors.fbLogin && <InlineError text={errors.fbLogin + ' Try Again please'} />}

            </div>
            );

        } else {
            fbContent =(  
                <div>
                    <div align="center"><h2>Nei Fb Menu</h2></div>
                    <h3>Select Option</h3>
                    <ul>
                        <li><Button href="/fb/profile">Fb Profile Info</Button></li>
                        <br />
                        <li><Button href="/fb/accounts">Fb FanPages</Button></li>
                    </ul>
                </div>

            );
        }


        return (
            <div>{fbContent}</div>
        )
    }

}


Facebook.propTypes = {
    LoggedInFb: PropTypes.bool.isRequired
};

function mapStateToProps(state){
    return {
      fb_toke: state.fbuser.token
    };
}
  
  
export default connect(mapStateToProps)(Facebook);
