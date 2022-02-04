import React from 'react';

class BookingListItem extends React.Component {
    constructor(props) {
        super(props)

        this.handeDelete = this.handeDelete.bind(this);
        this.dateFormat = this.dateFormat.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }


    handeDelete(e) {
        e.preventDefault();
        console.log('from delete', this.props)

        this.props.delete(this.props.trip.id);
        location.reload();
    }

    dateFormat(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['Placeholder', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        console.log('date', date)
        const splitted = date.split("-")

        const date_num = parseInt(splitted[2].slice(0, 2));
        const month = months[parseInt(splitted[1])];
        const year = parseInt(splitted[0]);

        const day_of_week = days[new Date(year, parseInt(splitted[1]) - 1, date_num).getDay()];
        return `${day_of_week}, ${date_num} ${month} ${year}`;
    }


    // handleClick(e) {
    //     e.preventDefault();
    //     this.props.history.push(`/spots/${this.props.trip.spotId}`);
    //     window.scrollTo(0, 0);
    // }

    render() {
        const spot = this.props.trip.spot;
        console.log('trip in list item',this.props.trip)
        return(
            <div>
                <div className='booking-index-item'>
                    <img src={this.props.photo}/>
                        <div className='spot-info'>

                            <span className='spot-title'>{spot.name}</span>
                            <div className='price-type'>
                                <span className='spot-price'>$150 per night</span>
                            </div>

                            <div className='booking-detail'>
                                <span className='guests'>{this.props.trip.guests} guest(s)</span>
                            <span className='dates'>{this.dateFormat(this.props.trip.startDate)} - {this.dateFormat(this.props.trip.endDate)}</span>
                                <button onClick={this.handeDelete}>Delete</button>
                            </div>

                        </div>

                </div>
            </div>
        )
    }



}
export default BookingListItem;