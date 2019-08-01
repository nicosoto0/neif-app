import React from 'react';
import {
  Button
} from 'semantic-ui-react'
import AccountIndex from '../fanpages/AccountIndex';


class FbAccountIndexPage extends React.Component {

  render() {

    return (
      <div>


        <AccountIndex account_id={this.props.match.params.accountId}/>
        <br />
        
        <Button href="/fb">Back FB Menu</Button>
      </div>
    );
  }
}



export default (FbAccountIndexPage);

