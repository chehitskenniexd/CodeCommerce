import { connect } from 'react-redux';
import checkoutComponent from '../components/checkoutComponent';
import { clearCart } from '../actions/cartActions';


const mapStateToProps = (state, ownProps) => ({
    total: state.total,
    cart: state.cart,
    products: state.products,
    user: state.user
})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // create a new order in the db.
    // update cart to {} after an order is submitted.
    clearCart: () => {
      return dispatch(clearCart())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(checkoutComponent);
