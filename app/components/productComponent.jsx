'use strict'

import React from 'react';
import axios from 'axios';

/*
The product component will render a single product to the screen
	- This component loads in an item based on a selected product, or linked object
	- The component mount gets the product through param(link) or selection
*/

export default class ProductComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id: 1,
			title: '',
			numStars: 1,
			description: '',
			product_id: 1,
		}
		this.onHandleSubmitReview = this.onHandleSubmitReview.bind(this);
	}

	onHandleChange(property, event) {
		this.setState({ [property]: event.target.value });
	}

	onHandleSubmitReview(event) {
		event.preventDefault();
		const newReview = this.state;
		this.state.product_id = this.props.currentProduct ? this.props.currentProduct.id : 1;
		this.props.onCreateOneReview(newReview);
		this.props.onLoadProduct(newReview.product_id);
	}


	componentWillMount() {
		const products = this.props.products;
		const productId = this.props.props.params.id;
		if (products && products.length > 0) {
			this.state.currentProduct = products.find(product => product.id === productId)
		} else {
			this.props.onLoadProduct(productId);
		}
	}

	render() {
		const currentProduct = this.props.currentProduct;
		return (

			<div className="container">
				<div className="row">
					<div className="col-md-12">
					<div className="col-md-3"></div>
					<div className="col-md-6">
					<div className="thumbnail">
						<img className=" img-responsive" src={currentProduct.photoUrl} alt="" />
							<div className="caption-full">
								<h4 className="pull-right">{currentProduct.price}</h4>
								<h4>{currentProduct.title}</h4>
								<p>{currentProduct.description}</p>
								<p>{currentProduct.inventoryQty > 0 ? <p> Stock Available </p> : <p> Stock not Available</p>}</p>
								<a onClick={(e) => {e.preventDefault(); this.props.addToCart(currentProduct.id, 1);}} href="#" className="btn btn-primary">Add To Cart!</a>
							</div>

					</div>

					<div className="row">
						<div className="text-right">
									<form onSubmit={this.onHandleSubmitReview} className="form-control">
										<h3 style={{"text-align": "center"}}>Please leave a Review:</h3>
										<div id="rating">
											<input name="myrating"
														 type="radio"
														 value="5"/><span>☆</span>
														 <input name="myrating"
														 				type="radio"
														 				value="4"/>
														 				<span>☆</span>
														 				<input name="myrating"
														 				type="radio"
														 				value="3" /><span>☆</span>
														 				<input name="myrating"
														 				type="radio"
														 				value="2" /><span>☆</span>
														 				<input name="myrating"
														 				type="radio"
														 				value="1" /><span>☆</span>
										</div>
									<h4 style={{"textAlign": "left"}}>Title</h4>
									<input type="input" className="form-control" onChange={(event) => { this.onHandleChange('title', event) } }></input>
									<div>
										<h4 style={{"textAlign": "left"}}>Tell us about your experience</h4>
									</div>
									<div>
										<textarea className="form-control" rows="3" onChange={(event) => { this.onHandleChange('description', event) } }></textarea>
									</div>
									<div>
										<button className="btn btn-primary" type="submit">Submit Review</button>
									</div>
								</form>


						</div>
					</div>


					<div className="product-description" >

						{
							this.props.currentProduct.productReviews
							&& this.props.currentProduct.productReviews.map((review, index) => {
								return (
									<div className={`review-${index}`} key={index}>
										<label className="review-title">{review.title}</label>
										<p>{review.numStars}</p>
										<p>{review.description}</p>
									</div>
								);
							})
						}
						</div>
						</div>
						<div className="col-md-3"></div>
					</div>
				</div>
			</div>
		);
	}
}


