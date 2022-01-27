import { connect } from "react-redux";
import { fetchSpots } from "../../../actions/spot_actions";
import SpotIndex from "./spot_index";

const mSTP = state => ({
    spots: Object.values(state.entities.spots)
})

const mDTP = dispatch => ({
    fetchSpots: () => dispatch(fetchSpots())
})

export default connect(mSTP,mDTP)(SpotIndex);
