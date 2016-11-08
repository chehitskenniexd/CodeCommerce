'use strict'

import React from 'react'
import { Link } from 'react-router';

/*
The sidebar component will render out a sidebar with the different categories of products.
*/

export default ({ categories, onLoadCategoryProducts }) => {
    return (
        <ul className="dropdown-menu">
            {
                categories && categories.map((category, index) => {
                    return (
                        <li className="category-li" key={`category-${index}`}>
                            <Link to={`/products/category/${category.id}`}
                                onClick={() => { onLoadCategoryProducts(category.id) } }>
                                {category.name}
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
}
