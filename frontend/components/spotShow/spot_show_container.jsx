import { connect } from 'react-redux';

import { fetchSpot } from '../../actions/spot_actions';
import { selectSpot, selectReviewsForSpot } from '../../reducers/selectors'
import SpotShow from './spot_show';
import { fetchAllReviews, deleteReview } from '../../actions/review_actions';


const mSTP = (state, { match }) => {
    const spotId = parseInt(match.params.spotId);
    
    return {
        spotId: spotId,
        spot: state.entities.spots[spotId],
        reviews: Object.values(state.entities.reviews),
        session: state.session.id,
        state: state
    };
};

const mDTP = dispatch => ({
    fetchSpot: id => dispatch(fetchSpot(id)),
    fetchAllReviews: spotId => dispatch(fetchAllReviews(spotId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(mSTP,mDTP)(SpotShow);