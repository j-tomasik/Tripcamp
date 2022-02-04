import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            start_date: '',
            end_date: '',
            guests: '1',
            // spot: this.props.spot
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const guestNum = parseInt(this.state.guests)
        const spotId = parseInt(this.props.match.params.spotId);
        const booking = Object.assign({}, this.state, {spot_id: spotId}, {guests: guestNum});

        if (this.props.session) {
            this.props.createBooking(booking)
                .then(() => {
                    this.props.history.push(`/users/${this.props.session}/bookings`);
                    // location.reload()
                })
        } else {
            this.props.history.push('/login')
        }
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render() {
        return(
            <form className='booking-form' onSubmit={this.handleSubmit}>
                <div className='price'>
                    <div className='price'>
                        <span>$150 per night</span>
                    </div>
                </div>

                <div className='dates'>
                    <div className='in'>
                        <div className='text'>
                            <label>Check in</label>
                            <input type='date' placeholder='Select date' onChange={this.update('start_date')}/>
                        </div>
                    </div>

                    <div className='out'>
                        <div className='text'>
                            <label>Check out </label>
                            <input type='date' placeholder='Select date' onChange={this.update('end_date')} />
                        </div>
                    </div>

                </div>


                <div className='guests'>
                    <div className='text'>
                        <label>Guests</label>
                            <select onChange={this.update('guests')}>
                                <option value='1'>1 guest</option>
                                <option value='2'>2 guests</option>
                                <option value='3'>3 guests</option>
                                <option value='4'>4 guests</option>
                                <option value='5'>5 guests</option>
                                <option value='6'>6 guests</option>
                            </select>

                    </div>

                </div>
                <div className='btn-container'>
                    <button type='submit'>Instant Book</button>
                </div>

            </form>
        )
    }


}

export default withRouter(BookingForm)