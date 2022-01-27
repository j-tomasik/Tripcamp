import { RECEIVE_SPOTS } from "../actions/spot_actions";
import { RECEIVE_SPOT } from "../actions/spot_actions";

const spotsReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate);
    
    switch (action.type) {
        case RECEIVE_SPOTS:
            return action.spots;
        case RECEIVE_SPOT:
            const newSpot = {[action.spot.id]: action.bench };
            return Object.assign({}, state, newSpot)
        default:
            return oldstate;
    }

}

export default spotsReducer;