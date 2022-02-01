import * as APIUtil from '../util/review_util';


export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = (review) => {
    // debugger
    return{
        type: RECEIVE_REVIEW,
        review

}
};

const receiveAllReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const createReview = (review) => dispatch => {

    return APIUtil.createReview(review).then((review) => dispatch(receiveReview(review)))
}

export const fetchAllReviews = (spotId) => dispatch => {
    return APIUtil.fetchAllReviews(spotId).then((reviews) => dispatch(receiveAllReviews(reviews)));
}

export const deleteReview = reviewId => dispatch => {
    return APIUtil.deleteReview(reviewId).then(() => dispatch(removeReview(reviewId)));
}

// export const updateReview = review => dispatch => {
//     return APIUtil.updateReview(review).then((review) => dispatch(receiveReview(review)));
// }

