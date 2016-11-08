'use stict'

import React from 'react';
import { Link } from 'react-router';

/*
The selected products component will render out the select components from a search or filter
    - This component loads in item baseds on a search, or filter
	- The component mount gets the product through param(link) or selection
*/

export default class SelectedProductsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if(this.props.props.params.categoryId){
            this.props.onLoadCategoryProducts(this.props.props.params.categoryId);
        } else if(this.props.props.params.productName){
            this.props.onLoadNamedProducts(this.props.props.params.productName);
        }
    }

    render() {
        const selectedProducts = this.props.selectedProducts;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9">

                        {
                            selectedProducts && selectedProducts.map((product, index) => {
                                return (
                                    <div className="thumbnail" key={`${index}`}>
                                        <img className="img-responsive" src={product.photoUrl} alt="" />
                                        <div className="caption-full">
                                        <h3 className="pull-right">${product.price}</h3>
                                        <h3><Link to={"/products/" + product.id}>{product.title}</Link></h3>
                                            <h5>
                                                {product.inventoryQty>0 ? <p> Stock Available </p> : <p> Stock not Available</p>}
                                            </h5>
                                            <div className="product-description" >
                                                <p>{product.description}</p>
                                                <a onClick={(e) => {e.preventDefault(); this.props.addToCart(product.id, 1);}} href="#" className="btn btn-primary">Add To Cart!</a>
                                            </div>
                                        </div>
                                        <div className="ratings">
                                            <p className="pull-right">3 reviews</p>
                                            <p>
                                            {/*substitue fake stars for real ones*/}
                                                <span className="glyphicon glyphicon-star"></span>
                                                <span className="glyphicon glyphicon-star"></span>
                                                <span className="glyphicon glyphicon-star"></span>
                                                <span className="glyphicon glyphicon-star"></span>
                                                <span className="glyphicon glyphicon-star-empty"></span>
                                                4.0 stars
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
            </div>
        );
    }
}
