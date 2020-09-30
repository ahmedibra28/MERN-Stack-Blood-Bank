import {
  GET_BLOOD_ISSUES,
  BLOOD_ISSUE_ERROR,
  ADD_BLOOD_ISSUE,
  UPDATE_BLOOD_ISSUE,
} from '../actions/types';

const initialState = {
  bloodIssues: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BLOOD_ISSUES:
    case ADD_BLOOD_ISSUE:
    case UPDATE_BLOOD_ISSUE:
      return {
        ...state,
        bloodIssues: payload,
        loading: false,
      };

    case BLOOD_ISSUE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
