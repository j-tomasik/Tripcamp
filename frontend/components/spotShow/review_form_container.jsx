import { connect } from 'react-redux';

import { createReview } from '../../actions/spot_actions';
import ReviewForm from './review_form';

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review))
});

export default connect(
    null, mDTP
)(ReviewForm);