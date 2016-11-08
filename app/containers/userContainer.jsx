import { connect } from 'react-redux';
 import userComponent from '../components/userComponent';


 const mapStateToProps = (state, ownProps) => ({
    currentUser: state.currentUser,
    
 });


export default connect(mapStateToProps)(userComponent);

