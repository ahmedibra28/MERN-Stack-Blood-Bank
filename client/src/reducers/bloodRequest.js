import {
  GET_BLOOD_REQUESTS,
  BLOOD_REQUEST_ERROR,
  ADD_BLOOD_REQUEST,
  UPDATE_BLOOD_REQUEST,
} from '../actions/types';

const initialState = {
  bloodRequests: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BLOOD_REQUESTS:
    case ADD_BLOOD_REQUEST:
    case UPDATE_BLOOD_REQUEST:
      return {
        ...state,
        bloodRequests: payload,
        loading: false,
      };

    case BLOOD_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
