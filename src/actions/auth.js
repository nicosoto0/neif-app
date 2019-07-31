import { USER_LOGGED_IN, FB_LOGGED_IN, FB_LOGGED_OUT } from '../types';
import api from '../api';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const fbLoggedIn = (user) => ({
    type: FB_LOGGED_IN,
    user
});

export const fbLoggedOut = () => ({
    type: FB_LOGGED_OUT
  });

export const login = credentials => dispatch => 
    api.user.login(credentials).then( user => {
        dispatch(userLoggedIn(user));
    });

export const fblogin = credentials => dispatch => 
api.user.fblogin(credentials).then( user => {
    dispatch(fbLoggedIn(user));
});

export const logout = () => dispatch => {
    //localStorage.removeItem("bookwormJWT");
    dispatch(fbLoggedOut());
  };

