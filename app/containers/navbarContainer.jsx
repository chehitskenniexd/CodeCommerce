'use strict'

import { connect } from 'react-redux';
import navbarComponent from '../components/navbarComponent';
import { receiveNamedProductsFromServer, logoutAUserFromWeb } from '../actions/productsActions';
import { browserHistory } from 'react-router'

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.currentUser,
})

const callback = url => browserHistory.push(`/${url}`)
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmitName: (name) => dispatch(receiveNamedProductsFromServer(name, callback)),
        onLogout: () => dispatch(logoutAUserFromWeb())
    };
 }

export default connect(mapStateToProps, mapDispatchToProps)(navbarComponent);
