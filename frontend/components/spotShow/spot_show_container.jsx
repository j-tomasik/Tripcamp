import { connect } from 'react-redux';

import { fetchSpot } from '../../actions/spot_actions';
import { selectSpot, selectReviewsForSpot } from '../../reducers/selectors'
import SpotShow from './spot_show';
import { fetchAllReviews } from '../../actions/review_actions';

const mSTP = (state, { match }) => {
    const spotId = parseInt(match.params.spotId);
    const spot = selectSpot(state.entities, spotId);
    const reviews = Object.values(state.entities.reviews);
    return {
        spotId,
        spot,
        reviews
    };
};

const mDTP = dispatch => ({
    fetchSpot: id => dispatch(fetchSpot(id)),
    fetchAllReviews: spotId => dispatch(fetchAllReviews(spotId))
});

export default connect(mSTP,mDTP)(SpotShow);