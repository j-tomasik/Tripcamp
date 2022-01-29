import { connect } from 'react-redux';

import { fetchSpot } from '../../actions/spot_actions';
import { selectSpot, selectReviewsForSpot } from '../../reducers/selectors'
import SpotShow from './spot_show';

const mSTP = (state, { match }) => {
    const spotId = parseInt(match.params.spotId);
    const spot = selectSpot(state.entities, spotId);
    const reviews = selectReviewsForSpot(state.entities, spot);
    return {
        spotId,
        spot,
        reviews
    };
};

const mDTP = dispatch => ({
    fetchSpot: id => dispatch(fetchSpot(id))
});

export default connect(mSTP,mDTP)(SpotShow);