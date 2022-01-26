import { combineReducers } from 'redux';

import spots from './spot_reducer';
// import reviews from './reviews_reducer';
import users from './users_reducer';

export default combineReducers({
    spots,
    // reviews,
    users,
});