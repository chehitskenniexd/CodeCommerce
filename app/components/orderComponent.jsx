'use strict'

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class OrderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: {},
            total: 0
        }
    }

    componentDidMount() {
        // Temporary axios call
        axios.get(`/api/orders/${this.props.props.params.order_id}`)
            .then(res => {
                this.setState({ order: res.data });
                this.forceUpdate();
            })
            .catch(err => console.log('Error receiving order', err));
    }

    render() {
        const order = this.state.order;
        return (
            <div className="row">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="text-center"><strong>Order Summary</strong></h3>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <table className="table table-condensed">
                                <thead>
                                    <tr>
                                        <td><strong>Item Name</strong></td>
                                        <td className="text-center"><strong>Item Price</strong></td>
                                        <td className="text-center"><strong>Item Quantity</strong></td>
                                        <td className="text-right"><strong>Total</strong></td>
                                    </tr>
                                </thead>
                                <tbody>

                                    {

                                        order.products && order.products.map((product, index) => {
                                            const order_product = product.order_product;
                                            this.state.total += Number(order_product.subTotal);
                                            return (
                                                <tr key={index}>
                                                    <td className="text-left">{product.title}</td>
                                                    <td className="text-center">${product.price}</td>
                                                    <td className="text-center">{order_product.quantity}</td>
                                                    <td className="text-right">${order_product.subTotal}</td>
                                                </tr>
                                            );
                                        })
                                    }

                                </tbody>
                            </table>
                            <h3 style={{"textAlign": "right"}}>Total: ${this.state.total}</h3>
                            <div>
                                {order && order.user ? <h4>Thank you: {order.user.name}</h4> : ''}
                            </div>
                            <div>
                                <p>Order Status: {order.status}</p>
                            </div>
                            <div>
                                <p>Shipping address: {order.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


/*
   {order && order.user ? <h1>Order Made By: {order.user.name}</h1> : ''}
                                <div>
                                    <h1>Order Status: {order.status}</h1>
                                    <h1>Shipping address: {order.address}</h1>
                                </div>*/

