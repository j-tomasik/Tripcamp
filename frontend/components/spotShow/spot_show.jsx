import React from 'react';
import { Link } from 'react-router-dom';


class SpotShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId);
    }

    render() {
        if (!this.props.spot) {
            console.log('null');
        return null}
        const { spot, spotId, fetchSpot } = this.props
    
        // const spots = {
        // [spotId]: spot
        // };
            console.log('I am here now')
        return (
            <div className='spot-show'>
                <div className='photos'>
                    <img className='index-image' src={spot.photoUrl} />
                </div>

                <div className='make-room'>
                    <div className='spot-show-body'>
                        <section className='header-container'>
                            <p className='country-location'></p>
                            <h1 className='name'>{spot.name}</h1>
                            <div className='rating'>Reccomended</div>
                            <div className='host'><b>Hosted by</b></div>
                            <div className='description'>{spot.description}</div>

                        </section>
                    </div>
                </div>

            </div>
            )
    }  

}

export default SpotShow;
