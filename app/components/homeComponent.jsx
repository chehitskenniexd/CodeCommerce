'use strict'

import React from 'react';
import SidebarContainer from '../containers/sidebarContainer';
import NavbarContainer from '../containers/navbarContainer';
import AllproductsContainer from '../containers/allproductsContainer';
import FooterContainer from '../containers/footerContainer';

export default ({ props, params }) => {

  var children = React.Children.map(props.children, function (child) {
    return React.cloneElement(child, {
      props,
      params
    })
  })

  return (
    <div className="container">
      <div className="row">
        <NavbarContainer />
        <div className="row">
          <div className='col-md-2'>
            <SidebarContainer />
          </div>
          <div className='col-md-10'>
            {children}
          </div>
        </div>
      </div>
    </div>
     
  )
}
