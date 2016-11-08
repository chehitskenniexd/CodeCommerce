 'use strict'

 import React from 'react';
 import axios from 'axios';
 import { connect } from 'react-redux'
 import { Link } from 'react-router';


export default class profileComponent extends React.Component {
	render(){

		return(
			<div className="user-profile">
					<img className="profile-image" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s" alt="Ash" />
				    <div className="username">Will Smith</div>
				  	<div className="bio">
				  	Senior UI Designer
				  	</div>

				    <div className="description">
				      I use to design websites and applications
				      for the web.
				  </div>
				  <ul className="data">
				 </ul>

				</div>

			)
		}	
 	}	
 	


// <CreditCardInformation
//  				disabled={true}
//  				values={user.creditCard ? user.creditCard : {}}
//  			 	errors={{}}
// />

// <div id="personal-info">
// 	 			<Administrator
// 	 				disabled={true}
// 	 				values={user.isAdmin ? user.isAdmin : {}}
// 	 				type="admin account"
// 	 				errors={{}}
// 	 				legendWidth={100}
// 	 			/>
// 	 			<PersonalInfo
// 	 				first_name={user.split(' ').slice(0, -1).join(' ')}
// 	 				last_name={user.split(' ').slice(-1).join(' ')}
// 	 				email={user.email}
// 	 				errors={{}}
// 	 				legendWidth={100}
// 	 			/>
// 	 			<Address
// 	 				disabled={true}
// 	 				values={user.addresses.length>0 ? user.addresses[0] : {}}
// 	 				type="Shipping"
// 	 				errors={{}}
// 	 				legendWidth={100}
// 	 			/>
// 	 			<Address
// 	 				disabled={true}
// 	 				values={user.addresses>1 ? user.addresseses[1] : {}}
// 	 				type="Billing"
// 	 				errors={{}}
// 	 				legendWidth={100}
// 	 			/>
 			 
//  			</div>






