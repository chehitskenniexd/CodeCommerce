'use strict'

import { CREATE_A_USER } from '../actions/userActions';

// Reducer for current user
export default function currentUserReducer(prevState = {}, action) {
    switch (action.type) {
        case CREATE_A_USER: {
            console.log('hey');
            return action.currentUser
        };
        default: {
            console.log('this should not happen here', action.type);
            return prevState;
        }
    }
}