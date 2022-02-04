import React from 'react';
import BookingListItem from './booking_list_item';

class BookingList extends React.Component {
    constructor(props) {
        super(props)
        // this.state = { showing: 'Trips' }
        this.handleReviewClick = this.handleReviewClick.bind(this);
    }

    handleReviewClick(id) {
        return e => {
            e.preventDefault();
            this.props.history.push(`/spots/${id}`)
        }
    }
    componentDidMount() {
        this.props.fetchBookings(this.props.user.id);
        window.scrollTo(0, 0);
    }

    render() {

        if (!(this.props.session === this.props.user.id)) {
            this.props.history.push('/');
        }

        const trips = this.props.bookings.map(trip => <BookingListItem key={trip.id} photo={trip.spotPhoto} spot={trip.spot} trip={trip} delete={this.props.deleteBooking} history={this.props.history} fetchSpot={this.props.fetchSpot} />)
    
        return(
            <div className='booking'>
                <div className='bio'>
                    <div className='user'>
                        <h2>Hello {this.props.user.firstname} {this.props.user.lastname}</h2>                                                                                       
                        
                    </div>

                    <div>
                        <span>Your current trip reservations are to the right, enjoy your Trips!</span>
                    </div>
                </div>

                <div className='trips'>
                        <span className='num-trips'>{this.props.bookings.length} Trip(s) currently planned</span>
                        {trips}
                </div>

            </div>
        )
    }



}
export default BookingList;