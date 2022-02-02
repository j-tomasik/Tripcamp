import React from "react";

import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: false,
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.navigateToSpotShow = this.navigateToSpotShow.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const spotId = parseInt(this.componentDidCatch.params.spotId);
        const review = Object.assign({}, this.state, { spot_id: spotId})
        this.props.createReview(review);
        location.reload()
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value});
    }

    render() {
        return(
            <div>
                <div className="review-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>Review
                            <textarea 
                                value={this.state.body} onChange={this.update('body')}
                            />
                        </label>
                        <button className="submit-review" type="submit">Leave Review</button>
                        <button className="review-exit">Close</button>
                    </form>
                </div>

            </div>
        )
    }

}

export default withRouter(ReviewForm);