import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from "semantic-ui-react";



export class AccountMenu extends Component {


    render() {

        return (
            <div> 
                <p>Select Option</p>
                <ul>
                    <li><Button value={1} onClick={e => this.props.handleChangeOption(e, "value")}>Go</Button> View Posts</li><br /> 
                    <li><Button value={2} onClick={e => this.props.handleChangeOption(e, "value")}>Go</Button> View Reactions and Likes</li><br /> 
                    <li><Button value={3} onClick={e => this.props.handleChangeOption(e, "value")}>Go</Button>iew Comments</li><br /> 
                    <li><Button value={4} onClick={e => this.props.handleChangeOption(e, "value")}>Go</Button> View Users </li><br /> 
                </ul>
            </div>
        );
    }
}

AccountMenu.propTypes = {
    handleChangeOption: PropTypes.func.isRequired
};
  


export default AccountMenu;
