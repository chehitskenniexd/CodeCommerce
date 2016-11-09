'use strict'

import { RECEIVE_ALL_USERS } from '../actions/userActions';

// Reducer for Products
export default function productsReducer(prevState = {}, action){
    switch(action.type){
        case RECEIVE_ALL_USERS: return action.users;
        
        default: return prevState;
    }
}