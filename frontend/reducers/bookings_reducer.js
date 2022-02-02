import { RECEIVE_BOOKING, REMOVE_BOOKING, RECEIVE_BOOKINGS} from '../actions/booking_actions'

const bookingsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BOOKINGS:
            return action.bookings;
        case RECEIVE_BOOKING:
            return Object.assign({}, state, {[action.booking.id]: action.booking})
        case REMOVE_BOOKING:
            const newState = Object.assign({}, state)
            delete newState[action.booking.id]
            return newState
    
        default:
            return state;
    }
}

export default bookingsReducer;