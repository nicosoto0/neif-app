import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from "semantic-ui-react";



export class AccountMenu extends Component {

    constructor(props){
        super(props);
        this.state = {
            account_id: this.props.account_id,
            displayOption: 0,
        };
    }


    render() {

        return (
            <div> 
                <p>Select Option</p>
                <ul>
                    <li><Button href="/InDevelopment">Go</Button> View Posts</li><br /> 
                    <li><Button href="/InDevelopment">Go</Button> View Reactions and Likes</li><br /> 
                    <li><Button href="/InDevelopment">Go</Button> View Comments</li><br /> 
                    <li><Button href="/InDevelopment">Go</Button> View Users </li><br /> 
                </ul>
            </div>
        );
    }
}

AccountMenu.propTypes = {
    account_id: PropTypes.string.isRequired
};
  


export default AccountMenu;
