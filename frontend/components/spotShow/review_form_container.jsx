import React from 'react';
import { connect } from 'react-redux';
import { fetchSpot} from '../../actions/spot_actions'

import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    fetchSpot: spotId => dispatch(fetchSpot(spotId))
});

export default connect(
    null, mDTP
)(ReviewForm);