import {
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_FAIL,
  COMMENT_RESET,
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAIL,
  COMMENT_CREATE_RESET,
  COMMENT_UPDATE_REQUEST,
  COMMENT_UPDATE_SUCCESS,
  COMMENT_UPDATE_FAIL,
  COMMENT_UPDATE_RESET,
  COMMENT_DELETE_REQUEST,
  COMMENT_DELETE_SUCCESS,
  COMMENT_DELETE_FAIL,
} from '../constants/commentConstants'
import { CLEAR_ALERTS } from '../constants/userConstants'

export const commentListReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case COMMENT_REQUEST:
      return {
        loading: true,
      }
    case COMMENT_SUCCESS:
      return {
        loading: false,
        comments: action.payload,
      }
    case COMMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case COMMENT_RESET:
      return {
        comments: [],
      }
    default:
      return state
  }
}

export const commentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMENT_CREATE_REQUEST:
      return {
        loading: true,
      }
    case COMMENT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        comments: action.payload,
      }
    case COMMENT_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case COMMENT_CREATE_RESET:
      return {}
    case CLEAR_ALERTS:
      return {
        success: false,
      }

    default:
      return state
  }
}

export const commentUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMENT_UPDATE_REQUEST:
      return {
        loading: true,
      }
    case COMMENT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case COMMENT_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case COMMENT_UPDATE_RESET:
      return {}
    case CLEAR_ALERTS:
      return {
        success: false,
      }

    default:
      return state
  }
}

export const commentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMENT_DELETE_REQUEST:
      return {
        loading: true,
      }
    case COMMENT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case COMMENT_DELETE_FAIL:
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
