import React from 'react';
import { connect } from 'react-redux';
import FbAccounts from '../utils/FbAccounts';
import {
  Button
} from 'semantic-ui-react'


class FbAccountsPage extends React.Component {

  render() {
    return (
      <div>
        <FbAccounts fbToken={this.props.fbToken}/>
        <br />
        <Button href="/fb">Back FB Menu</Button>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    fbToken: state.fbuser.token
  };
}


export default connect(mapStateToProps)(FbAccountsPage);
