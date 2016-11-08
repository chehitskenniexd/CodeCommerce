import axios from 'axios';
import { browserHistory } from 'react-router';

// const for actions
export const RECEIVE_A_USER = 'RECEIVE_A_USER';
export const CREATE_A_USER = 'CREATE_A_USER';
export const LOGOUT_A_USER = 'LOGOUT_A_USER';

// ACTIONS
const createAUser = currentUser => ({type: CREATE_A_USER, currentUser});
const receiveAUser = user => ({type: RECEIVE_A_USER, user });
const logoutAUser = () => ({type: LOGOUT_A_USER, currentUser: {}})

export const createAUserToServer = (user, callback) => dispatch => {
  axios.post('/api/users', user)
    .then(res => {
      dispatch(createAUser(res.data));
      browserHistory.push('/');
    })
    .catch(err => console.error('Creating a user failed'));
}

export const receiveAUserFromServer = (userId, callback) => dispatch => {
  axios.get(`/api/users/${userId}`)
    .then(res => {
      dispatch(receiveAUser(res.data));
    })
    .catch(err => console.error('Error receiving a user'));
}

export const logoutAUserFromWeb = () => dispatch => {
  dispatch(logoutAUser());
}