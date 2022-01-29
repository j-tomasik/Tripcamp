import { RECEIVE_SPOT } from '../actions/spot_actions';
import { RECEIVE_REVIEW, RECEIVE_REVIEWS } from '../actions/review_actions'

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // console.log(action);
    
    switch (action.type) {
        case RECEIVE_SPOT:
            return Object.assign({}, oldState, action.reviews);
        
        case RECEIVE_REVIEW:
            const newState = Object.assign({}, oldState)
            newState[action.review.id] = action.review
            return newState
        case RECEIVE_REVIEWS:
            return action.reviews;
    
        default:
            return oldState;
    }
}

export default reviewsReducer;