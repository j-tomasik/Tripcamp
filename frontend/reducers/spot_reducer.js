import { RECEIVE_SPOTS } from "../actions/spot_actions";
import { RECEIVE_SPOT } from "../actions/spot_actions";

const spotsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_SPOTS:
            return action.spots;
        case RECEIVE_SPOT:
            const newSpot = {[action.spot.id]: action.spot };
            return Object.assign({}, oldState, newSpot)
        default:
            return oldState;
    }

}

export default spotsReducer;