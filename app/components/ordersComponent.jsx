'use strict'

import React from 'react';
import orderContainer from '../containers/orderContainer';
import axios from 'axios';

export default class OrdersComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        const userId = this.props.props.params.id;
        // Temporary location to do an axios call for user
        axios.get(`/api/users/${this.props.props.params.id}`)
            .then(res => {
                this.setState({ orders: res.data.orders })
            })
            .then(() => this.forceUpdate())
            .catch(err => console.log('Error receiving orders', err));
    }

    render() {
        const orders = this.state.orders;
        return (
            <div className="orders-container">
                <ul className="orders">
                {
                    orders && orders.length > 0
                    ? orders.map((order, index) => {
                        return (
                            <div className="order-container" key={index}>
                                <h3>Order Status: {order.status}</h3>
                                <h3>Order Address: {order.address}</h3>
                            </div>
                        );
                    }) 
                    : <h3>No Orders!</h3>
                }
                </ul>
            </div>
        );
    }
}