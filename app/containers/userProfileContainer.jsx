'use strict'
import { connect } from 'react-redux';
import { receiveAUserFromServer } from '../actions/userActions';

import userProfileComponent from '../components/userProfileComponent';


 const mapStateToProps = (state, ownProps) => ({
    currentUser: state.currentUser,
    
 });

 const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //  : (user) => dispatch(receiveAUserFromServer())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(userProfileComponent);
