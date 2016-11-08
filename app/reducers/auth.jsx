import axios from 'axios'
import { CREATE_A_USER, LOGOUT_A_USER } from '../actions/userActions';

var initUser = JSON.parse(localStorage.getItem('user'));

const reducer = (state = null, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.user
    case CREATE_A_USER: {
      checkoutLocalStorage(action.auth);
      return action.auth;
    }
    case LOGOUT_A_USER: {
      checkoutLocalStorage({});
      return action.auth;
    }
    default: return state;
  }
}

function checkoutLocalStorage (user) {
  user = JSON.stringify(user);
  localStorage.setItem('user', user);
  console.log('local ', localStorage);
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/local/login',
      { username, password })
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export default reducer
