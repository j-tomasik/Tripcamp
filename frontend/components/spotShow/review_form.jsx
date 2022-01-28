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
        this.navigateToSpotShow = this.navigateToSpotShow.bind(this);
    }



}