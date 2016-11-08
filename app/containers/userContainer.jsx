'use strict'

import { connect } from 'react-redux';
import userComponent from '../components/userComponent';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.currentUser,
    
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(userComponent);