'use strict'

import { connect } from 'react-redux';
import ordersComponent from '../components/ordersComponent';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ordersComponent);