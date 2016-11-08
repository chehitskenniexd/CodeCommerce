'use strict'

import { connect } from 'react-redux';
import navbarComponent from '../components/navbarComponent';
import { receiveNamedProductsFromServer } from '../actions/productsActions';
import { logout } from 'APP/app/reducers/auth';
import { browserHistory } from 'react-router'

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
})

const callback = url => browserHistory.push(`/${url}`)
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmitName: (name) => dispatch(receiveNamedProductsFromServer(name, callback)),
        onLogout: () => dispatch(logout())
    };
 }

export default connect(mapStateToProps, mapDispatchToProps)(navbarComponent);
