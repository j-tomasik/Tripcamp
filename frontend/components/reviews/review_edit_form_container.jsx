import React from 'react';
import { connect } from 'react-redux';
import { updateReview } from '../../actions/review_actions';
import ReviewEditForm from './review_edit_form';

const mSTP = (state, ownProps) => {
    // console.log('own props in edit container', ownProps)
    return{
    spotId: ownProps.match.params.spotId,
    authorId: state.session.id,
    review: state.entities.reviews[ownProps.match.params.id]
    }
}

const mDTP = dispatch => ({
    updateReview: review => dispatch(updateReview(review))
})

export default connect(
    mSTP, mDTP
)(ReviewEditForm)