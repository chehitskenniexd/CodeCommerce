'use strict'

import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router';


export default class profileComponent extends React.Component {
       constructor(props) {
              super(props);
           this.state = {
            currentUser: null
           }
    	}
            
		componentDidMount() {
			axios.get(`/api/users/${this.props.props.params.id}`)
					.then(res => {
					this.setState({ currentUser: res.data })
				})
			.catch(err => console.log('Error receiving orders', err));
		}
        
       render() {
        if (this.props.auth) {
			console.log(this.state.currentUser);
            return (
				<div className="row">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="text-center"><strong>User Profile</strong></h3>
						</div>
						<table className="table table-condensed">
							<tbody>
								<tr>
									<td className="text-left">User Name</td>
									<td className="text-center">{this.props.auth.name}</td>
								</tr>
								<tr>
									<td className="text-left">User Main Address</td>
									<td className="text-center">{this.props.auth.addresses[0]}</td>
								</tr>
								<tr>
									<td className="text-left">User Orders</td>
									{
										this.state.currentUser &&
										this.state.currentUser.orders.map((order, index) => {
											return (
												<div key={index} className="text-center">
													<Link to={`/users/${this.props.auth.id}/orders/${order.id}`}>Order {index + 1}</Link>
												</div>
											);
										})
									}
								</tr>
								<tr>
									<td className="text-left">User Products</td>
									{
										this.state.currentUser &&
										this.state.currentUser.products.map((product, index) => {
											return (
												<div key={index} className="text-center">
													<Link to={`/products/${product.id}`} className="text-left">{product.title}</Link>
												</div>
											);
										})
									}
								</tr>
							</tbody>
						</table>
					</div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}


