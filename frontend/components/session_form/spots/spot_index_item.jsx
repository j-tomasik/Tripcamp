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
        const { name, description, photoUrl, id, reviews } = this.props.spot;

        //not sure if this works, from hip trip
        // let spotRating = 0;
        // Object.values(this.props.spot.reviews).forEach((el) => {
        //     if (el.recomended === true) {
        //         (spotRating += 1)
        //     }
        // });
        
        // spotRating = Math.floor((spotRating / Object.values(this.props.spot.reviews).length) * 20)
            
        
        //add these in to access info if I want to render in component
            // < h3 className = "spot-index-header-hundred-percent" > { spotRating } %</h3 >
            //     <h5 className="spot-show-header-review-count">- {Object.keys(reviews).length} Reviews</h5>



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