import * as APIUtil from '../util/booking_util';

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";


const receiveBooking = ({booking}) => {
    debugger
    return{type: RECEIVE_BOOKING,
    booking}
};

const removeBooking = (bookingId) => ({
    type: REMOVE_BOOKING,
    bookingId
});

const receiveBookings = (bookings) => {

    return {type: RECEIVE_BOOKINGS,
    bookings}
};

export const fetchBookings = userId => dispatch => {
    return APIUtil.fetchBookings(userId).then((bookings) => dispatch(receiveBookings(bookings)));
}

export const createBooking = booking => dispatch => {
    return APIUtil.createBooking(booking).then((booking) => dispatch(receiveBooking(booking)),() => console.log('fail'));
}

export const deleteBooking = bookingId => dispatch => {
    return APIUtil.deleteBooking(bookingId).then(() => dispatch(removeBooking(bookingId)));
}