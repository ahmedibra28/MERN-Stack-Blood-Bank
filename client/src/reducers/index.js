import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import bloodRequest from './bloodRequest';
import bloodStore from './bloodStore';
import bloodIssue from './bloodIssue';

export default combineReducers({
  alert,
  auth,
  bloodRequest,
  bloodStore,
  bloodIssue,
});
