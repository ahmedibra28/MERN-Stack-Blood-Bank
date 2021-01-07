import {
  BLOOD_STORE_REQUEST,
  BLOOD_STORE_SUCCESS,
  BLOOD_STORE_FAIL,
  BLOOD_STORE_RESET,
  BLOOD_STORE_CREATE_REQUEST,
  BLOOD_STORE_CREATE_SUCCESS,
  BLOOD_STORE_CREATE_FAIL,
  BLOOD_STORE_CREATE_RESET,
  BLOOD_STORE_UPDATE_REQUEST,
  BLOOD_STORE_UPDATE_SUCCESS,
  BLOOD_STORE_UPDATE_FAIL,
  BLOOD_STORE_UPDATE_RESET,
  BLOOD_STORE_DELETE_REQUEST,
  BLOOD_STORE_DELETE_SUCCESS,
  BLOOD_STORE_DELETE_FAIL,
} from '../constants/bloodStoreConstants'
import { CLEAR_ALERTS } from '../constants/userConstants'

export const bloodStoreListReducer = (state = { bloodStores: [] }, action) => {
  switch (action.type) {
    case BLOOD_STORE_REQUEST:
      return {
        loading: true,
      }
    case BLOOD_STORE_SUCCESS:
      return {
        loading: false,
        bloodStores: action.payload,
      }
    case BLOOD_STORE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case BLOOD_STORE_RESET:
      return {
        bloodStores: [],
      }
    default:
      return state
  }
}

export const bloodStoreCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOOD_STORE_CREATE_REQUEST:
      return {
        loading: true,
      }
    case BLOOD_STORE_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        bloodStores: action.payload,
      }
    case BLOOD_STORE_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case BLOOD_STORE_CREATE_RESET:
      return {}
    case CLEAR_ALERTS:
      return {
        success: false,
      }

    default:
      return state
  }
}

export const bloodStoreUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOOD_STORE_UPDATE_REQUEST:
      return {
        loading: true,
      }
    case BLOOD_STORE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case BLOOD_STORE_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case BLOOD_STORE_UPDATE_RESET:
      return {}
    case CLEAR_ALERTS:
      return {
        success: false,
      }

    default:
      return state
  }
}

export const bloodStoreDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOOD_STORE_DELETE_REQUEST:
      return {
        loading: true,
      }
    case BLOOD_STORE_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case BLOOD_STORE_DELETE_FAIL:
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
