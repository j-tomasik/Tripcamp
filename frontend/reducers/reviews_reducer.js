import {
    RECEIVE_SPOT,
    RECIEVE_REVIEW,
} from '../actions/spot_actions';

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    console.log(action);
    
    switch (action.type) {
        case RECEIVE_SPOT:
            return Object.assign({}, oldState, action.reviews);
        
        case RECIEVE_REVIEW:
            const newState = Object.assign({}, oldState)
            newState[action.review.id] = action.review
            return newState
    
        default:
            return oldState;
    }
}

export default reviewsReducer;