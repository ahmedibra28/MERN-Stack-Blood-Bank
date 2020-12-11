import axios from 'axios'
import {
  BLOOD_REQUEST_REQUEST,
  BLOOD_REQUEST_SUCCESS,
  BLOOD_REQUEST_FAIL,
  BLOOD_REQUEST_CREATE_FAIL,
  BLOOD_REQUEST_CREATE_REQUEST,
  BLOOD_REQUEST_CREATE_SUCCESS,
  BLOOD_REQUEST_UPDATE_FAIL,
  BLOOD_REQUEST_UPDATE_SUCCESS,
  BLOOD_REQUEST_UPDATE_REQUEST,
  BLOOD_REQUEST_DELETE_REQUEST,
  BLOOD_REQUEST_DELETE_SUCCESS,
  BLOOD_REQUEST_DELETE_FAIL,
} from '../constants/bloodRequestConstants'

export const listBloodRequest = () => async (dispatch) => {
  try {
    dispatch({ type: BLOOD_REQUEST_REQUEST })

    const { data } = await axios.get(`/api/blood-request`)

    dispatch({
      type: BLOOD_REQUEST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOOD_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createBloodRequest = (blood) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOOD_REQUEST_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/blood-request`, blood, config)

    dispatch({
      type: BLOOD_REQUEST_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOOD_REQUEST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateBloodRequest = (blood) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOOD_REQUEST_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.put(`/api/blood-request/${blood._id}`, blood, config)

    dispatch({
      type: BLOOD_REQUEST_UPDATE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: BLOOD_REQUEST_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteBloodRequest = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOOD_REQUEST_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/blood-request/${id}`, config)

    dispatch({
      type: BLOOD_REQUEST_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: BLOOD_REQUEST_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
