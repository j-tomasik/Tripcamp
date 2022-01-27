import { RECEIVE_SPOTS } from "../actions/spot_actions";

const spotsReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate);
    
    switch (action.type) {
        case RECEIVE_SPOTS:
            return action.spots;   
        default:
            return oldstate;
    }

}

export default spotsReducer;