import {
  GET_BLOOD_STORES,
  BLOOD_STORE_ERROR,
  ADD_BLOOD_STORE,
  UPDATE_BLOOD_STORE,
} from '../actions/types';

const initialState = {
  bloodStores: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BLOOD_STORES:
    case ADD_BLOOD_STORE:
    case UPDATE_BLOOD_STORE:
      return {
        ...state,
        bloodStores: payload,
        loading: false,
      };

    case BLOOD_STORE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
