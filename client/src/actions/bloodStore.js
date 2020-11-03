import axios from 'axios';
import { setAlert } from './alert';

import {
  ADD_BLOOD_STORE,
  BLOOD_STORE_ERROR,
  GET_BLOOD_STORES,
  UPDATE_BLOOD_STORE,
} from './types';

// Get blood store
export const getBloodStores = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/blood-store');
    dispatch({
      type: GET_BLOOD_STORES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BLOOD_STORE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create blood store
export const addBloodStore = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const res = await axios.post('/api/blood-store', formData, config);

    dispatch({
      type: ADD_BLOOD_STORE,
      payload: res.data,
    });

    dispatch(setAlert('Successfully Added Blood Store', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: BLOOD_STORE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update blood store
export const updateBloodStore = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const res = await axios.put(
      `/api/blood-store/${formData._id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_BLOOD_STORE,
      payload: res.data,
    });

    dispatch(setAlert('Successfully Updated Blood Store', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: BLOOD_STORE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete blood store
export const deleteBloodStore = (id) => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      const res = await axios.delete(`/api/blood-store/${id}`);
      dispatch({
        type: UPDATE_BLOOD_STORE,
        payload: res.data,
      });

      dispatch(setAlert('Successfully Deleted Blood Store', 'success'));
    } catch (err) {
      dispatch({
        type: BLOOD_STORE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
