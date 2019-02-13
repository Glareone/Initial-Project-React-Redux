import { combineReducers } from 'redux';

import topics from './topics';
import users from './users';

export default combineReducers({ topics, users });
