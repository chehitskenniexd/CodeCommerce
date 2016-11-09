'use strict'

import { connect } from 'react-redux';
import productComponent from '../components/productComponent';
import {
    receiveOneProductFromServer,
    receiveAllProductsFromServer
} from '../actions/productsActions';
import { createOneReviewToServer } from '../actions/reviewActions';
import { updateCart } from '../actions/cartActions';

const mapStateToProps = (state, ownProps) => ({
    currentProduct: state.currentProduct,
    cart: state.cart,
    auth: state.auth
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadProduct: (productId) => dispatch(receiveOneProductFromServer(productId)),
        addToCart: (item, qty) => dispatch(updateCart(item, qty)),
        onCreateOneReview: review => dispatch(createOneReviewToServer(review)),
        onLoadAllProducts: () => dispatch(receiveAllProductsFromServer())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(productComponent);
