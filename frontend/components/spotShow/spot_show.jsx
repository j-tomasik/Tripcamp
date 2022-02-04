import React from 'react';
import { Link } from 'react-router-dom';
import ReviewList from '../reviews/review_list';
import BookingForm from './booking_form_container'
import ReviewForm from './review_form'




class SpotShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId).then(            
            this.props.fetchAllReviews(this.props.match.params.spotId)
        );
        window.scrollTo(0, 0);
    }

    handleReviewClick(e) {
        e.preventDefault();

        if(!this.props.session) {
            this.props.history.push('/login')
        }
    }

    render() {
        if (!this.props.spot) {
        return null}

    
        const { spot, spotId, fetchSpot } = this.props
        const nameArr = spot.name.split(',');
        const spotName = nameArr[0];
        const spotCountry = nameArr[1];
    
        
        return (    
            <div className='spot-show'>
                    <div className='photos'>
                        <img className='index-image' src={spot.photoUrl} />
                    </div>

                <div className='make-room'>
                    <BookingForm spot={spot} session={this.props.state.session}/>
                    


                    <div className='spot-show-body'>
                        <section className='header-container'>
                            <p className='country-location'>{spotCountry}</p>
                            <h1 className='name'>{spotName}</h1>
                            <div className='rating'>Recommended</div>
                            <div className='host-description'><b>Hosted by Jack</b></div>
                            <div className='description'><span><b>Description:</b> </span> {spot.description}</div>

                        </section>

                        <section className='features'>
                            <div className='spacing'>
                                <div className='area'>
                                    <h2>Lodging provided</h2>                               
                                    <ul>
                                        <li>Water proof tent</li>
                                        <li>Host's guest room</li>
                                        <li>RV upgrade avaible</li>
                                    </ul>

                                </div>
                            </div>

                            <div className='spacing'>
                                <div className='essential'>
                                    <h2>Essentials</h2>
                                    <ul>
                                        <li>Campires allowed</li>
                                        <li>Pets allowed</li>
                                        <li>Toilet available</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='spacing'>
                                <div className='amenity'>
                                    <h2>Amenities</h2>
                                    <ul>
                                        <li>Potable water avaible</li>
                                        <li>Shower avaible</li>
                                        <li>Laundry absent</li>
                                        <li>Wifi available</li>
                                    </ul>
                                </div>
                            </div>

                        </section>

                        <div className='details'>
                            <h2 className='details-header'>Details</h2>
                            <div className='details-content'>
                                <span><b>Check in:</b> After 2PM</span>
                                <span><b>Check out:</b> Before 12PM</span>
                                <span><b>Cancelation policy:</b> Moderate</span>
                            </div>

                            <div>
                                <span><b>On arrival:</b> Proceed to camp location</span>
                                <span><b>Minimum nights:</b> 2</span>
                                <span><b>Accepts bookings:</b> 6 months out</span>
                            </div>
                        </div>

                        <section className='activities'>
                            <h2>Activities</h2>
                                <ul>
                                    <li>Sight seeing</li>
                                    <li>Biking</li>
                                    <li>Hiking</li>
                                </ul>
                            <p>Offered on the Host's property or nearby</p>
                        </section>

                        <section>
                            {this.props.reviews && 
                                <ReviewList spot={this.props.spot} state={this.props.state} reviews={this.props.reviews} session={this.props.session} deleteReview={this.props.deleteReview} />

                            }
                        </section>
                        <br />
                        </div>
                                <Link to={`/spots/${spotId}/reviews`} className='create-review'>Create New Review</Link>
                        <div>
                            
                    
                        
                    </div>
                    
                    
                </div>

            
            </div>
            )
    }  

}

export default SpotShow;
