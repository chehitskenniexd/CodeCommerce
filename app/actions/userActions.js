import axios from 'axios';
import { browserHistory } from 'react-router';

// const for actions
export const RECEIVE_A_USER = 'RECEIVE_A_USER';
export const CREATE_A_USER = 'CREATE_A_USER';

// ACTIONS
const createAUser = auth => ({type: CREATE_A_USER, auth});
const receiveAUser = user => ({type: RECEIVE_A_USER, user });

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