'use strict'

import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router';


export default class profileComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.auth) {
			return (
				<div className="user-profile">
					<div className="user-name">{this.props.auth && this.props.auth.name}</div>
					<Link to={`/users/${this.props.auth.id}/orders`}>My Orders</Link>
				</div>
			)
		} else {
			return <div></div>
		}
	}
}


