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

                            <div className='index-item-copy'><b>{name}</b></div>
                                <br />
                                <div className='index-item-description'>{description}</div>
                        </div>

                    </div>
                </Link>
                </div>
            
        );
    }
}

export default withRouter(IndexItem);