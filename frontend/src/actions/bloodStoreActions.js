import axios from 'axios'
import {
  BLOOD_STORE_REQUEST,
  BLOOD_STORE_SUCCESS,
  BLOOD_STORE_FAIL,
  BLOOD_STORE_CREATE_FAIL,
  BLOOD_STORE_CREATE_REQUEST,
  BLOOD_STORE_CREATE_SUCCESS,
  BLOOD_STORE_UPDATE_FAIL,
  BLOOD_STORE_UPDATE_SUCCESS,
  BLOOD_STORE_UPDATE_REQUEST,
  BLOOD_STORE_DELETE_REQUEST,
  BLOOD_STORE_DELETE_SUCCESS,
  BLOOD_STORE_DELETE_FAIL,
} from '../constants/bloodStoreConstants'

export const listBloodStore = () => async (dispatch) => {
  try {
    dispatch({ type: BLOOD_STORE_REQUEST })

    const { data } = await axios.get(`/api/blood-store`)

    dispatch({
      type: BLOOD_STORE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOOD_STORE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createBloodStore = (blood) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOOD_STORE_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/blood-store`, blood, config)

    dispatch({
      type: BLOOD_STORE_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOOD_STORE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateBloodStore = (blood) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOOD_STORE_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.put(`/api/blood-store/${blood._id}`, blood, config)

    dispatch({
      type: BLOOD_STORE_UPDATE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: BLOOD_STORE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteBloodStore = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOOD_STORE_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/blood-store/${id}`, config)

    dispatch({
      type: BLOOD_STORE_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: BLOOD_STORE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
