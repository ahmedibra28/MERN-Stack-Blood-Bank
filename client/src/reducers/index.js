import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import bloodRequest from './bloodRequest';
import bloodStore from './bloodStore';

export default combineReducers({
  alert,
  auth,
  bloodRequest,
  bloodStore,
});
