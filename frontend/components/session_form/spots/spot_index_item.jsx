import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SpotIndexContainer from './spot_index_container'

class IndexItem extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     const spotId = this.props.spot.id;
    //     this.props.history.push(`/spots/${spotId}`);
    // }

    render() {
        const { name, description, photoUrl, id } = this.props.spot;

        return(

            
            
                <div
                    className='spot-index-item'
                    // onClick={this.handleClick}
                >
                    <Link to={`/spots/${id}`}>
                    <div className='frame'>
                            <img src={photoUrl} />
                        <div className='figure-caption'>
                                <span className='index-item-category'>Name: </span>
                                <span className='index-item-copy'>{name}</span>
                                <br />
                                <span className='index-item-category'>Description: </span>
                                <span className='index-item-copy'>{description}</span>
                        </div>

                    </div>
                </Link>
                </div>
            
        );
    }
}

export default withRouter(IndexItem);