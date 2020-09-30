import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import bloodRequest from './bloodRequest';

export default combineReducers({
  alert,
  auth,
  bloodRequest,
});
