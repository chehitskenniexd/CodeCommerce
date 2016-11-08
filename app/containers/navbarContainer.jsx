'use strict'

import { connect } from 'react-redux';
import navbarComponent from '../components/navbarComponent';
import { receiveNamedProductsFromServer } from '../actions/productsActions';
import { logoutAUserFromWeb } from '../actions/userActions';
import { browserHistory } from 'react-router'

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
})

const callback = url => browserHistory.push(`/${url}`)
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmitName: (name) => dispatch(receiveNamedProductsFromServer(name, callback)),
        onLogout: () => dispatch(logoutAUserFromWeb())
    };
 }

export default connect(mapStateToProps, mapDispatchToProps)(navbarComponent);
