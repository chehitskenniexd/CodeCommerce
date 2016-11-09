'use strict'
import { connect } from 'react-redux';
 import userProfileComponent from '../components/userProfileComponent';


 const mapStateToProps = (state, ownProps) => ({
    currentUser: state.currentUser,
    
 });

 const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // onLoadCategories: (categories) => dispatch(receiveUsersFromServer()),
        // onLoadProducts: () => dispatch(receiveUsersFromServer())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(userProfileComponent);
