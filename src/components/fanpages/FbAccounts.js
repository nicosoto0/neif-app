import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fbDataRequest } from '../utils/services/fbDataRequest';
import { Button } from 'semantic-ui-react'
import { AccountOptions }  from './AccountOptions'


export class FbAccounts extends Component {

    constructor(props){
        super(props);
        this.getAccounts = this.getAccounts.bind(this);
        this.getAccountsData = this.getAccountsData.bind(this);
        this.handleSelectAccount = this.handleSelectAccount.bind(this);
        this.state = {
            token: this.props.fbToken,
            Loading: true,
            accounts: undefined,
            selectedAcount: false,
            account: undefined,
            errors: {}

        };
      }


    componentDidMount() {
        this.getAccounts();
    }

    async getAccounts(){
        const response = await this.getAccountsData(this.state.token);

        if (!this.state.errors.hasOwnProperty('fbAccounts')){
            this.setState({ 
                accounts: response.accounts.data,
                Loading: false
             });
        }
    }

    async getAccountsData(token){
        const fields = "accounts{id,name,access_token}";
        const request = await fbDataRequest(token, fields);

        const errors = {};
        if (request.hasOwnProperty('error')){

            errors.fbAccounts = request.error.message;
        }
        this.setState({ errors });

        return request;
    }

    handleSelectAccount (account){
        this.setState({
            selectedAcount: true,
            account: account
        });
    }

    handleUnselectAccount (){
        this.setState({
            selectedAcount: false,
            account: undefined
        });
    }

    render(){
        let Content;

        if (this.state.Loading){
            Content = (
                <div>
                    <h1> Loading... </h1>
                </div>
            );
        } else if (!this.state.selectedAcount) {
            Content = (
                <div >
                    <h1>Select FanPage</h1>
                    <div align="center">
                    { this.state.accounts.map((account, i) => {
                        return (
                            <div key={i}>
                                <br />
                                {/* <Button onClick={() => this.handleSelectAccount(account)}>{account.name}</Button> */}
                                <Button href={"/fb/accounts/"+account.id}>{account.name}</Button>
                            </div>
                        )
                        })
                    }
                    </div>
                </div>
            );
        } else {
            Content = (
                <div>
                    <div align="center">
                        <AccountOptions account={this.state.account} />
                    </div>
                    <br />
                    <Button onClick={() => this.handleUnselectAccount()}>Back FanPages Menu</Button> 

                </div>
            );
        }

        return (
            <div>
                {Content}
            </div>
        );
    }

}

FbAccounts.propTypes = {
    fbToken: PropTypes.string.isRequired
};
  


export default FbAccounts;
