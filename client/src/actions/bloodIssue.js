import axios from 'axios';
import { setAlert } from './alert';

import {
  ADD_BLOOD_ISSUE,
  BLOOD_ISSUE_ERROR,
  GET_BLOOD_ISSUES,
  UPDATE_BLOOD_ISSUE,
} from './types';

// Get blood issue
export const getBloodIssues = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/blood-issue');
    dispatch({
      type: GET_BLOOD_ISSUES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BLOOD_ISSUE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create blood issue
export const addBloodIssue = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const res = await axios.post('/api/blood-issue', formData, config);

    dispatch({
      type: ADD_BLOOD_ISSUE,
      payload: res.data,
    });

    dispatch(setAlert('Successfully Added Blood Issue', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: BLOOD_ISSUE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update blood issue
export const updateBloodIssue = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const res = await axios.put(
      `/api/blood-issue/${formData._id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_BLOOD_ISSUE,
      payload: res.data,
    });

    dispatch(setAlert('Successfully Updated Blood Issue', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: BLOOD_ISSUE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete blood issue
export const deleteBloodIssue = (id) => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      const res = await axios.delete(`/api/blood-issue/${id}`);
      dispatch({
        type: UPDATE_BLOOD_ISSUE,
        payload: res.data,
      });

      dispatch(setAlert('Successfully Deleted Blood Issue', 'success'));
    } catch (err) {
      dispatch({
        type: BLOOD_ISSUE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
