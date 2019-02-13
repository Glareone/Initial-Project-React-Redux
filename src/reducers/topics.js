import { actionTypes } from '../actions/topics';
import { Request, Success } from '../utils/asyncRequestStates';

const initialState = {
  allTopics: [],
  isLoading: false
};

const refreshTopics = (state, action) => {
  if (action.requestState === Request) {
    return { ...state, isLoading: true };
  }
  if (action.requestState === Success) {
    return { ...state, isLoading: false, allTopics: action.data };
  }

  return { ...state, isLoading: false, allTopics: [] };
};

const topicsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_TOPICS:
      return refreshTopics(state, action);
    default:
      return state;
  }
};

export default topicsReducer;
