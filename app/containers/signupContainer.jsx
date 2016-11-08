'use strict'

import { connect } from 'react-redux';
import signUpComponent from '../components/signUpComponent';
import { createAUserToServer } from '../actions/userActions';

const mapStateToProps = (state, ownProps) => ({})
const mapDispatchToProps = (dispatch, ownProps) => ({
    onCreateNewUser: user => dispatch(createAUserToServer(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(signUpComponent);
