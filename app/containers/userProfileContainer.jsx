'use strict'
import { connect } from 'react-redux';
 import userProfileComponent from '../components/userProfileComponent';


 const mapStateToProps = (state, ownProps) => ({
    currentUser: state.currentUser,
    
 });


export default connect(mapStateToProps)(userProfileComponent);
