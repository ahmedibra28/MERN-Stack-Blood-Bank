import axios from 'axios'
import {
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_FAIL,
  COMMENT_CREATE_FAIL,
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
  COMMENT_UPDATE_FAIL,
  COMMENT_UPDATE_SUCCESS,
  COMMENT_UPDATE_REQUEST,
  COMMENT_DELETE_REQUEST,
  COMMENT_DELETE_SUCCESS,
  COMMENT_DELETE_FAIL,
} from '../constants/commentConstants'

export const listComment = () => async (dispatch, getState) => {
  try {
    dispatch({ type: COMMENT_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/comment`, config)

    dispatch({
      type: COMMENT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: COMMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createComment = (comment) => async (dispatch, getState) => {
  try {
    dispatch({ type: COMMENT_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/comment`, { comment }, config)

    dispatch({
      type: COMMENT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: COMMENT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateComment = (comment) => async (dispatch, getState) => {
  try {
    dispatch({ type: COMMENT_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.put(`/api/comment/${comment._id}`, comment, config)

    dispatch({
      type: COMMENT_UPDATE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: COMMENT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteComment = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: COMMENT_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/comment/${id}`, config)

    dispatch({
      type: COMMENT_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: COMMENT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
