import {
  BLOOD_REQUEST_REQUEST,
  BLOOD_REQUEST_SUCCESS,
  BLOOD_REQUEST_FAIL,
  BLOOD_REQUEST_RESET,
  BLOOD_REQUEST_CREATE_REQUEST,
  BLOOD_REQUEST_CREATE_SUCCESS,
  BLOOD_REQUEST_CREATE_FAIL,
  BLOOD_REQUEST_CREATE_RESET,
  BLOOD_REQUEST_UPDATE_REQUEST,
  BLOOD_REQUEST_UPDATE_SUCCESS,
  BLOOD_REQUEST_UPDATE_FAIL,
  BLOOD_REQUEST_UPDATE_RESET,
  BLOOD_REQUEST_DELETE_REQUEST,
  BLOOD_REQUEST_DELETE_SUCCESS,
  BLOOD_REQUEST_DELETE_FAIL,
} from '../constants/bloodRequestConstants'
import { CLEAR_ALERTS } from '../constants/userConstants'

export const bloodRequestListReducer = (
  state = { bloodRequests: [] },
  action
) => {
  switch (action.type) {
    case BLOOD_REQUEST_REQUEST:
      return {
        loading: true,
      }
    case BLOOD_REQUEST_SUCCESS:
      return {
        loading: false,
        bloodRequests: action.payload,
      }
    case BLOOD_REQUEST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case BLOOD_REQUEST_RESET:
      return {
        bloodRequests: [],
      }
    default:
      return state
  }
}

export const bloodRequestCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOOD_REQUEST_CREATE_REQUEST:
      return {
        loading: true,
      }
    case BLOOD_REQUEST_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        bloodRequests: action.payload,
      }
    case BLOOD_REQUEST_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case BLOOD_REQUEST_CREATE_RESET:
      return {}
    case CLEAR_ALERTS:
      return {
        success: false,
      }

    default:
      return state
  }
}

export const bloodRequestUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOOD_REQUEST_UPDATE_REQUEST:
      return {
        loading: true,
      }
    case BLOOD_REQUEST_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case BLOOD_REQUEST_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case BLOOD_REQUEST_UPDATE_RESET:
      return {}
    case CLEAR_ALERTS:
      return {
        success: false,
      }

    default:
      return state
  }
}

export const bloodRequestDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOOD_REQUEST_DELETE_REQUEST:
      return {
        loading: true,
      }
    case BLOOD_REQUEST_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case BLOOD_REQUEST_DELETE_FAIL:
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
