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
 				type="admin account"
 				errors={{}}
 				legendWidth={100}
 			/>
 			<PersonalInfo
 				first_name={user.split(' ').slice(0, -1).join(' ')}
 				last_name={user.split(' ').slice(-1).join(' ')}
 				email={user.email}
 				errors={{}}
 				legendWidth={100}
 			/>
 			<Address
 				disabled={true}
 				values={user.addresses.length>0 ? user.addresses[0] : {}}
 				type="Shipping"
 				errors={{}}
 				legendWidth={100}
 			/>
 			<Address
 				disabled={true}
 				values={user.addresses>1 ? user.addresseses[1] : {}}
 				type="Billing"
 				errors={{}}
 				legendWidth={100}
 			/>
 			 
 		</div>
 		)
 	}
 };

// <CreditCardInformation
//  				disabled={true}
//  				values={user.creditCard ? user.creditCard : {}}
//  			 	errors={{}}
// />






