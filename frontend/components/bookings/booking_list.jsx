import React from 'react';
import BookingListItem from './booking_list_item';

class BookingList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showing: 'Trips' }
        this.handleReviewClick = this.handleReviewClick.bind(this);
    }

    handleReviewClick(id) {
        return e => {
            e.preventDefault();
            this.props.history.push(`/spots/${id}`)
        }
    }

    render() {
        //push to login page?
        if (!(this.props.session === this.props.user.id)) {
            this.props.history.push('/');
        }
        const trips = this.props.user.bookings.map(trip => <BookingListItem key={trip.id} delete={this.props.deleteBooking} history={this.props.history} fetchSpot={this.props.fetchSpot} />)
    
        return(
            <div className='booking'>
                <div className='bio'>
                    <div className='user'>
                        <h2>{this.props.user.firstname} {this.props.user.lastname}</h2>
                        <span>Your current spots reservations are to the right, enjoy your Trips!</span>
                    </div>
                </div>

                <div className='trips'>
                        <span className='num-trips'>{this.props.user.bookings.length}</span>
                        {trips}
                </div>

            </div>
        )
    }



}
export default BookingList;