import React from 'react';
import { Link } from 'react-router';

/*
This component is a stateless component rendering all the products
- User for the landing page to get view all the products
*/

function calculateProductNumStars(product) {
  let numStars = 0;
  product.productReviews.forEach(review => {
    numStars += review.numStars;
  })
  numStars = Math.ceil(numStars / product.productReviews.length);
  return numStars;
}

function drawStars(product) {
  let output = [];
  const numStars = calculateProductNumStars(product);
  for (let i = 0; i < numStars; ++i) {
    output.push(1);
  }
  for (let j = 0; j < (5 - numStars); ++j) {
    output.push(0);
  }
  return output;
}

export default ({products, addToCart, cart}) => (

<div className="row">
  <div id="myModal" className="modal fade" role="dialog">
    <div className="modal-dialog">

      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Success!</h4>
        </div>
        <div className="modal-body">
          <p>Item added to cart</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>
  <div className="products-wrapping-container">
    {
      products && products.map((product, index) => {
        return (
          <div key={`${index}`} className="col-md-4 col-sm-4 col-lg-4" id="product-card">
            <div className="thumbnail">
              <img src={product.photoUrl} alt="" />
              <div className="caption-full">
                <h4 className="pull-right">${product.price}</h4>
                <h4><Link to={"/products/" + product.id}>{product.title}</Link></h4>
                <p>{product.description}</p>
                <p>
                  <a data-toggle="modal" data-target="#myModal" onClick={(e) => { e.preventDefault(); addToCart(product.id, 1); } } href="#" className="btn btn-primary ">Add To Cart!</a>
                </p>
              </div>
              <div className="ratings">
                <p className="pull-right">
                  {product.productReviews.length === 1
                    ? `${product.productReviews.length} Review`
                  : `${product.productReviews.length} Reviews`}
                </p>
                <p className="stars">
                  {
                    product.productReviews.length < 1
                    ? 'No Reviews!'
                    : drawStars(product).map((star, index) => {
                    return star === 1
                      ? <span key={index} className="glyphicon glyphicon-star"></span>
                    : <span key={index} className="glyphicon glyphicon-empty"></span>
                  })
                }
              </p>
            </div>
          </div>
        </div>
      )
    })
  }
  </div>
</div>
  );
