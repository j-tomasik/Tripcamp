import React from "react";
import { connect } from "react-redux";
import ReviewList from "./review_list";
import { fetchSpot } from "../../actions/spot_actions";
import { fetchAllReviews } from "../../actions/review_actions";

const mSTP = (state, ownProps) => {
    return {

    currentUser: state.entities.users[state.session.id],
    sessionId: state.session.id,
    spotId: ownProps.spotId,
    spot: state.entities.spots[ownProps.spotId],
    session: state.session,
    
}};
console.log(fetchAllReviews)
const mDTP = dispatch => {
    return {fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    fetchAllReviews: spotId => dispatch(fetchAllReviews(spotId))
    }
}

export default connect(mSTP, mDTP)(ReviewList);