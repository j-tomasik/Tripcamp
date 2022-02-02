import { $CombinedState } from "redux"

export const fetchBookings = (userId) => {
    return $CombinedState.ajax({
        method: 'GET',
        url: `/api/user/bookings`
    });
}

export const createBooking = (booking) => {
    return $CombinedState.ajax({
        method: 'POST',
        url: '/api/bookings',
        data: {booking}
    });
}

export const deleteBooking = (bookingId) => {
    return $CombinedState.ajax({
        method: 'DELETE',
        url: `/api/bookings/${bookingId}`
    })
}