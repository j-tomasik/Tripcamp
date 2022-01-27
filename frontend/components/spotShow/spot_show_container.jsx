import { connect } from 'react-redux';

import { fetchSpot } from '../../actions/spot_actions';
import { selectSpot } from '../../reducers/selectors'
import SpotShow from './spot_show';

const mSTP = (state, { match }) => {
    const spotId = parseInt(match.params.spotId);
    const spot = selectSpot(state.entities, spotId);
    return {
        spotId,
        spot
    };
};

const mDTP = dispatch => ({
    fetchSpot: id => dispatch(fetchSpot(id))
});

export default connect(mSTP,mDTP)(SpotShow);