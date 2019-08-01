import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from "semantic-ui-react";
import { AccountMenu } from './AccountMenu';


export class AccountIndex extends Component {

    constructor(props){
        super(props);
        this.state = {
            account_id: this.props.account_id,
            displayOption: 0,
        };
    }




    render() {

        let Content;

        if (this.state.displayOption === 0){
            Content = (
                <AccountMenu account_id={this.state.account_id} />
            );
        } else if (this.state.displayOption === 1){
            Content = (
                <div>
                    <p>Opción:{this.state.displayOption}</p>
                </div>
            );
        } else {
            Content =(
                <p>Opción:{this.state.displayOption}</p>
            );
        }


        return (
            <div>
                <h1>{this.state.account_id}: </h1>
                {Content}
                <br />
                <Button href="/fb/accounts">Back FanPages Selection</Button>
            </div>
        );
    }


}

AccountIndex.propTypes = {
    account_id: PropTypes.string.isRequired
};
  


export default AccountIndex;
