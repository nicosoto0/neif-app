import React from 'react';
import { connect } from 'react-redux';
import Facebook from '../utils/facebook'


class FbPage extends React.Component {

  render() {
    return (
      <div>
        <Facebook LoggedInFb={this.props.LoggedInFb}/>
        
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    LoggedInFb: !!state.fbuser.token
  };
}


export default connect(mapStateToProps)(FbPage);
