'use strict'
import { connect } from 'react-redux';
import { receiveAUserFromServer } from '../actions/userActions';

import userProfileComponent from '../components/userProfileComponent';


 const mapStateToProps = (state, ownProps) => ({
     auth: state.auth
 });

 const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(userProfileComponent);
