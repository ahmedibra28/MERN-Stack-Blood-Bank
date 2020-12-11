import axios from 'axios'
import {
  BLOOD_ISSUE_REQUEST,
  BLOOD_ISSUE_SUCCESS,
  BLOOD_ISSUE_FAIL,
  BLOOD_ISSUE_CREATE_FAIL,
  BLOOD_ISSUE_CREATE_REQUEST,
  BLOOD_ISSUE_CREATE_SUCCESS,
  BLOOD_ISSUE_DELETE_REQUEST,
  BLOOD_ISSUE_DELETE_SUCCESS,
  BLOOD_ISSUE_DELETE_FAIL,
} from '../constants/bloodIssueConstants'

export const listBloodIssue = () => async (dispatch) => {
  try {
    dispatch({ type: BLOOD_ISSUE_REQUEST })

    const { data } = await axios.get(`/api/blood-issue`)

    dispatch({
      type: BLOOD_ISSUE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOOD_ISSUE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createBloodIssue = (blood) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOOD_ISSUE_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/blood-issue`, blood, config)

    dispatch({
      type: BLOOD_ISSUE_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOOD_ISSUE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteBloodIssue = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOOD_ISSUE_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/blood-issue/${id}`, config)

    dispatch({
      type: BLOOD_ISSUE_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: BLOOD_ISSUE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
