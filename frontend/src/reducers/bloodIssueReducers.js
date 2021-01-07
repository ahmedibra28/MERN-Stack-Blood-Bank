import {
  BLOOD_ISSUE_REQUEST,
  BLOOD_ISSUE_SUCCESS,
  BLOOD_ISSUE_FAIL,
  BLOOD_ISSUE_RESET,
  BLOOD_ISSUE_CREATE_REQUEST,
  BLOOD_ISSUE_CREATE_SUCCESS,
  BLOOD_ISSUE_CREATE_FAIL,
  BLOOD_ISSUE_CREATE_RESET,
  BLOOD_ISSUE_DELETE_REQUEST,
  BLOOD_ISSUE_DELETE_SUCCESS,
  BLOOD_ISSUE_DELETE_FAIL,
} from '../constants/bloodIssueConstants'
import { CLEAR_ALERTS } from '../constants/userConstants'

export const bloodIssueListReducer = (state = { bloodIssues: [] }, action) => {
  switch (action.type) {
    case BLOOD_ISSUE_REQUEST:
      return {
        loading: true,
      }
    case BLOOD_ISSUE_SUCCESS:
      return {
        loading: false,
        bloodIssues: action.payload,
      }
    case BLOOD_ISSUE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case BLOOD_ISSUE_RESET:
      return {
        bloodIssues: [],
      }
    default:
      return state
  }
}

export const bloodIssueCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOOD_ISSUE_CREATE_REQUEST:
      return {
        loading: true,
      }
    case BLOOD_ISSUE_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        bloodIssues: action.payload,
      }
    case BLOOD_ISSUE_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case BLOOD_ISSUE_CREATE_RESET:
      return {}
    case CLEAR_ALERTS:
      return {
        success: false,
      }

    default:
      return state
  }
}

export const bloodIssueDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOOD_ISSUE_DELETE_REQUEST:
      return {
        loading: true,
      }
    case BLOOD_ISSUE_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case BLOOD_ISSUE_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case CLEAR_ALERTS:
      return {
        success: false,
      }

    default:
      return state
  }
}
