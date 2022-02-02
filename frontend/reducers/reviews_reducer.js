import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions'

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    
    switch (action.type) {
        case RECEIVE_REVIEW:
            const newState = Object.assign({}, oldState)
            newState[action.review.review.id] = action.review.review
            return newState
        case RECEIVE_REVIEWS:
            return action.reviews;

        // case REMOVE_REVIEW:
        //     const newState = Object.assign({}, oldState)
        //     delete newState[action.reviewId]
        //     return newState;
        default:
            return oldState;
    }
}

export default reviewsReducer;