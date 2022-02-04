import { connect } from 'react-redux';
import { deleteBooking, fetchBookings } from '../../actions/booking_actions';
import { fetchSpot } from '../../actions/spot_actions';
import BookingList from './booking_list'

const mSTP = (state, ownProps) => {
    // console.log('book list container state', state)
    // console.log('book list container ownProps', ownProps)
    return {
        user: state.entities.users[state.session.id],
        bookings: Object.values(state.entities.bookings),
        session: state.session.id,
    };
}

    const mDTP = (dispatch) => ({
        deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
        fetchBookings: userId => dispatch(fetchBookings(userId)),
        fetchSpot: spotId => dispatch(fetchSpot(spotId))
    });

    export default connect(mSTP, mDTP)(BookingList)


