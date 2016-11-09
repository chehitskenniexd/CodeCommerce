'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import signupContainer from './containers/signupContainer'
import homeContainer from './containers/homeContainer'
import productContainer from './containers/productContainer'
import allProductsContainer from './containers/allproductsContainer'
import selectedProductsContainer from './containers/selectedProductsContainer'
import WhoAmI from './components/WhoAmI'
import cartContainer from './containers/cartContainer';
import receiveAllProductsFromServer from './actions/productsActions';
import productAddingContainer from './containers/productAddingContainer';
import checkoutContainer from './containers/checkoutContainer';
import ordersContainer from './containers/ordersContainer';
import orderContainer from './containers/orderContainer';
import userProfileContainer from './containers/userProfileContainer';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={homeContainer}>
        <IndexRoute component={allProductsContainer} />
        <Route path="products/:id" component={productContainer} />
        <Route path="products/category/:categoryId" component={selectedProductsContainer} />
        <Route path="cart" component={cartContainer} onEnter={receiveAllProductsFromServer} />
        <Route path="products/name/:productName" component={selectedProductsContainer} />
        <Route path="products/product/add" component={productAddingContainer} />
        <Route path="users/:id/orders" component={ordersContainer} />
        <Route path="users/:user_id/orders/:order_id" component={orderContainer} />
      </Route>
      <Route path="/signup" component={signupContainer} />
      <Route path="/login" component={Login} />
      <Route path="/checkout" component={checkoutContainer} />
      <Route path="/profile" component={userProfileContainer} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
