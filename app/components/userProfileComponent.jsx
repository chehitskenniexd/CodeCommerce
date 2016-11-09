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
                <div className="user-profile">
                    <div className="user-name">{this.props.auth && this.props.auth.name}</div>
                    <Link to={`/users/${this.props.auth.id}/orders`}>My Orders</Link>
                    <div> My Products
                    	{
                            this.state.currentUser 
							&& this.state.currentUser.products.map((product, index) => {
                                return (
                                    <div key={index}>
                                        <Link to={`/products/${product.id}`} className="text-left">{product.title}</Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}


