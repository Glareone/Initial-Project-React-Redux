import { Request, Success, Failure } from '../utils/asyncRequestStates';
import usersService from '../services/usersService.stub';

const actionTypes = {
  FETCH_USERS: 'FETCH_USERS'
};

const fetchUsers = (requestState, data) => ({
  type: actionTypes.FETCH_USERS,
  requestState,
  data
});

const fetchUsersAsync = () => async dispath => {
  dispath(fetchUsers(Request, []));
  try {
    const users = await usersService.getAll();
    dispath(fetchUsers(Success, users));
  } catch (err) {
    dispath(fetchUsers(Failure, []));
  }
};

export { actionTypes, fetchUsersAsync };
