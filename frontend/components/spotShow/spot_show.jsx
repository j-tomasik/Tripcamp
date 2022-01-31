import React from 'react';
import { Link } from 'react-router-dom';
import ReviewList from '../reviews/review_list';



class SpotShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId).then(            
            this.props.fetchAllReviews(this.props.match.params.spotId)
        )
    }

    render() {
        if (!this.props.spot) {
        return null}

        // if (this.props.reviews.length === 0) {
        //     return null
        // }

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

                    <div className='booking-form'>
                        
                        <div className='price-per-night'>
                            <div className='price'>$150</div>
                            <div className='per-night'>per night</div>
                        </div>

                        <div className='form-field'>
                            <div className='checkin'>
                                <div className='label'>Check in</div>
                                <div className='DayPickerInput'>
                                    <input placeholder='Select date' />
                                </div>
                            </div>


                            <div className='checkout'>
                                <div className='label'>Check out</div>
                                <div className='DayPickerInput'>
                                    <input placeholder='Select date' />
                                </div>
                            </div>


                            <div className='guests'>
                                <div className='label'>Guests</div>
                                <div className='book-guests'>
                                </div>
                            </div>

                        </div>
                        
                        <div className='btn-container'>
                            <button>Instant Book</button>
                        </div>


                    </div>


                    <div className='spot-show-body'>
                        <section className='header-container'>
                            <p className='country-location'>{spotCountry}</p>
                            <h1 className='name'>{spotName}</h1>
                            <div className='rating'>Reccomended</div>
                            <div className='host-description'><b>Hosted by Jack</b></div>
                            <div className='description'>{spot.description}</div>

                        </section>

                        <section className='features'>
                            <div className='spacing'>
                                <div className='area'>
                                    <h2>Lodging provided</h2>
                                </div>
                            </div>

                            <div className='spacing'>
                                <div className='essential'>
                                    <h2>Lodging provided</h2>
                                </div>
                            </div>

                            <div className='spacing'>
                                <div className='amenity'>
                                    <h2>Amenities</h2>
                                </div>
                            </div>

                        </section>

                        <section className='details'>
                            <h2 className='details'>Details</h2>
                            <div className='content'>

                            </div>
                        </section>

                        <section className='activities'>
                            <h2 className='activities'>Activities</h2>
                            <p>Offered on the Host's property or nearby</p>
                        </section>

                        <section>
                            {this.props.reviews && 
                                <ReviewList spot={this.props.spot} state={this.props.state} reviews={this.props.reviews} session={this.props.session} deleteReview={this.props.deleteReview} />

                            }
                        </section>
                    </div>
                    
                    
                </div>

            
            </div>
            )
    }  

}

export default SpotShow;
