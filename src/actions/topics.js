import { Request, Success, Failure } from '../utils/asyncRequestStates';
import topicsService from '../services/topicsService.stub';

const actionTypes = {
  FETCH_TOPICS: 'FETCH_TOPICS'
};

const fetchTopics = (requestState, data) => ({
  type: actionTypes.FETCH_TOPICS,
  requestState,
  data
});

const fetchTopicsAsync = () => async dispath => {
  dispath(fetchTopics(Request, []));
  try {
    const topics = await topicsService.getAll();
    dispath(fetchTopics(Success, topics));
  } catch (err) {
    dispath(fetchTopics(Failure, []));
  }
};

export { actionTypes, fetchTopicsAsync };
