import { combineReducers } from 'redux';
import user from './reducers/user';
import fbuser from "./reducers/fbuser";
import fbaccounts from "./reducers/fbaccounts";

export default combineReducers({
  user,
  fbuser,
  fbaccounts
});
