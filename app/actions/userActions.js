import axios from 'axios';
import { browserHistory } from 'react-router';

// const for actions
export const CREATE_A_USER = 'CREATE_A_USER';

// ACTIONS
const createAUser = currentUser => ({type: CREATE_A_USER, currentUser});

export const createAUserToServer = (user, callback) => dispatch => {
  axios.post('/api/users', user)
    .then(res => {
      dispatch(createAUser(res.data));
      browserHistory.push('/');
    })
    .catch(err => console.error('Creating a user failed'));
}
