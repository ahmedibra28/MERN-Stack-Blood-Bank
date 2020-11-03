import axios from 'axios';
import { setAlert } from './alert';

import {
  ADD_BLOOD_REQUEST,
  BLOOD_REQUEST_ERROR,
  GET_BLOOD_REQUESTS,
  UPDATE_BLOOD_REQUEST,
} from './types';

// Get blood requests
export const getBloodRequests = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/blood-request');
    dispatch({
      type: GET_BLOOD_REQUESTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BLOOD_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create blood request
export const addBloodRequest = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const res = await axios.post('/api/blood-request', formData, config);

    dispatch({
      type: ADD_BLOOD_REQUEST,
      payload: res.data,
    });

    dispatch(setAlert('Successfully Added Blood Request', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: BLOOD_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update blood request
export const updateBloodRequest = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const res = await axios.put(
      `/api/blood-request/${formData._id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_BLOOD_REQUEST,
      payload: res.data,
    });

    dispatch(setAlert('Successfully Updated Blood Request', 'success'));
  } catch (err) {
    dispatch({
      type: BLOOD_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });

    console.log(err);
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

// Delete blood request
export const deleteBloodRequest = (id) => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      const res = await axios.delete(`/api/blood-request/${id}`);
      dispatch({
        type: UPDATE_BLOOD_REQUEST,
        payload: res.data,
      });

      dispatch(setAlert('Successfully Deleted Blood Request', 'success'));
    } catch (err) {
      dispatch({
        type: BLOOD_REQUEST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
