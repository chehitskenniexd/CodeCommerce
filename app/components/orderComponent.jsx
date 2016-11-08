'use strict'

import React from 'react';

export default class OrderComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log('hello from order');
    }
    
    render() {
        console.log(this.props.order);
        return (
            <div className="order-container">
                
            </div>
        );
    }
}