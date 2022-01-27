import React from 'react';
import { Link } from 'react-router-dom';


class SpotShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { spot, spotId, fetchSpot } = this.props
    
        // const spots = {
        // [spotId]: spot
        // };

        return (
            <div className='spot-details'>
                <ul>
                    <img className='index-image' src={spot.photoUrl} />
                    <li>Name: {spot.name}</li>
                    <li>Description: {spot.description}</li>
                </ul>

            </div>
            )
    }  

}

export default SpotShow;
