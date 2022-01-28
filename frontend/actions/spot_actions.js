import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECIEVE_REVIEW = 'RECIEVE_REVIEW';

export const receiveSpots = spots => {
    return ({type: RECEIVE_SPOTS,
    spots,
    })
};
export const receiveSpot =(spot) => ({
    type: RECEIVE_SPOT,
    spot
})

export const receiveReview = (review) => ({
    type: RECIEVE_REVIEW,
    review
});

export const createReview = review => dispatch => (
    APIUtil.createReview(review).then(review => (dispatch(receiveReview(review))))
);

export const fetchSpots = () => dispatch => (
    APIUtil.fetchSpots().then(spots => dispatch(receiveSpots(spots)))
);

export const fetchSpot = (spotId) => dispatch => (
    APIUtil.fetchSpot(spotId).then(spot => dispatch(receiveSpot(spot)))
);
