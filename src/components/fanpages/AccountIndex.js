import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AccountMenu } from './components/AccountMenu';

export class AccountIndex extends Component {

    constructor(props){
        super(props);
        this.handleChangeOption = this.handleChangeOption.bind(this);
        this.state = {
            account_id: this.props.account_id,
            option: 0,
        };
    }

    handleChangeOption = e => {
        this.setState({
            option: e.target.value
        });
        console.log(this.props.rootReducer);
    }

    render() {

        let Content;

        if (this.state.option === 0){
            Content = (
                <AccountMenu handleChangeOption={this.handleChangeOption} />
            );
        } else if (this.state.option === 1){
            Content = (
                <div>
                    <p>Opción:{this.state.option}</p>
                </div>
            );
        } else {
            Content =(
                <p>Opción:{this.state.option}</p>
            );
        }


        return (
            <div>
                <h1>{this.state.account_id}: </h1>
                {Content}
                <br />
                <a href="/fb/accounts">Back FanPages Selection</a>
            </div>
        );
    }


}

AccountIndex.propTypes = {
    account_id: PropTypes.string.isRequired
};



export default AccountIndex;
