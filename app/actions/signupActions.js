import axios from 'axios';

// const for actions
const CREATE_A_USER = 'CREATE_A_USER';

// ACTIONS
const createAUser = user => ({type: CREATE_A_USER, user});

export const createAUserToServer = (user, callback) => dispatch => {
  axios.post('/api/users', user)
    .then(user => dispatch(createAUser(user)))
    .catch(err => console.error('Creating a user failed'));
}
