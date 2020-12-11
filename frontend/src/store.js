import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers'
import {
  bloodStoreCreateReducer,
  bloodStoreDeleteReducer,
  bloodStoreListReducer,
  bloodStoreUpdateReducer,
} from './reducers/bloodStoreReducers'

import {
  bloodRequestCreateReducer,
  bloodRequestDeleteReducer,
  bloodRequestListReducer,
  bloodRequestUpdateReducer,
} from './reducers/bloodRequestReducers'
import {
  bloodIssueCreateReducer,
  bloodIssueDeleteReducer,
  bloodIssueListReducer,
} from './reducers/bloodIssueReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,

  bloodStoreList: bloodStoreListReducer,
  bloodStoreCreate: bloodStoreCreateReducer,
  bloodStoreUpdate: bloodStoreUpdateReducer,
  bloodStoreDelete: bloodStoreDeleteReducer,

  bloodRequestList: bloodRequestListReducer,
  bloodRequestCreate: bloodRequestCreateReducer,
  bloodRequestUpdate: bloodRequestUpdateReducer,
  bloodRequestDelete: bloodRequestDeleteReducer,

  bloodIssueList: bloodIssueListReducer,
  bloodIssueCreate: bloodIssueCreateReducer,
  bloodIssueDelete: bloodIssueDeleteReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
