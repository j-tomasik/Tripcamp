import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import reviewErrorsReducer from './review_errors_reducer';

export default combineReducers({
    session: sessionErrorsReducer,
    review: reviewErrorsReducer,

});