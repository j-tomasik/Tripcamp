import { conntect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';
import { connect } from 'react-redux';

const mSTP = state => ({
    session: state.session.id
})

const mDTP = dispatch => ({
    createBooking: booking => dispatch(createBooking(booking))
})

export default connect(
    mSTP,
    mDTP
)(BookingForm)