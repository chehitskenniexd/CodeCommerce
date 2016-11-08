import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class userComponent extends React.Component {

render(){

	return (
		<div id="personal-info">
			<Administrator
				disabled={true}
				values={user.isAdmin ? user.isAdmin : {}}
				type="Shipping"
				errors={{}}
				legendWidth={185}
			/>
			<PersonalInfo
				first_name={user.split(' ').slice(0, -1).join(' ')}
				last_name={user.split(' ').slice(-1).join(' ')}
				email={user.email}
				errors={{}}
				disabled={true}
			/>
			<Address
				disabled={true}
				values={user.addresses.length>0 ? user.addresses[0] : {}}
				type="Shipping"
				errors={{}}
				legendWidth={185}
			/>
			<Address
				disabled={true}
				values={user.addresses>1 ? user.addresseses[1] : {}}
				type="Billing"
				errors={{}}
				legendWidth={160}
			/>
			// <CreditCardInformation
			// 	disabled={true}
			// 	values={user.creditCard ? user.creditCard : {}}
			// 	errors={{}}
			// />
		</div>
		)
	}
};














