import { RECEIVE_SPOTS, RECEIVE_SPOT, RECEIVE_REVIEW } from "../actions/spot_actions";


const spotsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_SPOTS:
            return action.spots;
        case RECEIVE_SPOT:
            const newSpot = {[action.spot.id]: action.spot };
            return Object.assign({}, oldState, newSpot)

        // case RECEIVE_REVIEW:
        //     const { review } = action;
        //     const newState = Object.assign({}, oldState);
                
        //     newState[review.spot_id].reviewIds.push(review.id)
        //     return newState;
        default:
            return oldState;
    }

}

export default spotsReducer;