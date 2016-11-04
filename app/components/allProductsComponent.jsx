import React from 'react';
import { Link } from 'react-router';


export default ({products, addToCart, cart}) => (

        <div className="row text-center">
          {
            products && products.map((product, index) => {
              return (
                <div key={product.id} className="col-md-3 col-sm-6 product-boxes">
                    <div className="thumbnail">
                        <img src={product.photoUrl} alt=""/>
                        <div className="caption">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            <p>
                                <a onClick={() => {addToCart(product.id, 1);}} href="#" className="btn btn-primary">Buy Now!</a> <a href="#" className="btn btn-default">More Info</a>
                            </p>
                        </div>
                    </div>
                </div>
              )
            })
          }
        </div>
);
