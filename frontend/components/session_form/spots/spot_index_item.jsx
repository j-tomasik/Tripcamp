import React from 'react';
import { withRouter } from 'react-router-dom';
import SpotIndexContainer from './spot_index_container'

class IndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const spotId = this.props.spot.id;
        this.props.history.push(`/spots/${spotId}`);
    }

    render() {
        const { name, description, picture_url } = this.props.spot;

        return(
            <div
                className='spot-index-item'
                onClick={this.handleClick}
            >
                <span className='index-item-category'>Rating:</span>
                <span className='index-item-copy'>
                    {'no reviews yet'}
                </span>
                <span className='index-item-category'>Name:</span>
                <span className='index-item-copy'>{name}</span>
                <span className='index-item-category'>Description:</span>
                <span className='index-item-copy'>{description}</span>

                <img src={picture_url}/>

            </div>
        );
    }
}

export default withRouter(IndexItem);