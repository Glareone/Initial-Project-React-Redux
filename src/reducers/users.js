import { actionTypes } from '../actions/users';
import { Request, Success } from '../utils/asyncRequestStates';

const initialState = {
  allUsers: [],
  isLoading: false
};

const refreshUsers = (state, action) => {
  if (action.requestState === Request) {
    return { ...state, isLoading: true };
  }
  if (action.requestState === Success) {
    return { ...state, isLoading: false, allUsers: action.data };
  }

  return { ...state, isLoading: false, allUsers: [] };
};

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return refreshUsers(state, action);
    default:
      return state;
  }
};

export default usersReducer;
