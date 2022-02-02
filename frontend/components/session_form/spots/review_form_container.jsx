import React from 'react';
import { connect } from 'react-redux';
import { createReview } from '../../../actions/review_actions';
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => ({
    spotId: ownProps.match.params.spotId,
    authorId: state.session.id
})


const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review))
})

export default connect(
    mSTP, mDTP
)(ReviewForm)