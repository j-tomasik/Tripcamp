import { RECEIVE_SPOTS, RECEIVE_SPOT, RECIEVE_REVIEW } from "../actions/spot_actions";


const spotsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_SPOTS:
            return action.spots;
        case RECEIVE_SPOT:
            const newSpot = {[action.spot.id]: action.spot };
            return Object.assign({}, oldState, newSpot)

        case RECIEVE_REVIEW:
            const { review } = action.review;
            const newState = Object.assign({}, oldState);
                
            newState[review.spot_id].reviewIds.push(review.id)
            return newState;
        default:
            return oldState;
    }

}

export default spotsReducer;