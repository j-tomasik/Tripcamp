import React from "react";


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                recommend: true,
                //recommend: recommend.getAttribute("data-recommend")
                body: '',
                spot_id: this.props.spotId,
                author_id: this.props.authorId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log('component initialize')
    };

    handleSubmit(e) {
        e.preventDefault();
        // const recommend = $(".selected-option")[0];
        const review = Object.assign({}, this.state);
        this.props.createReview(review);
        // location.reload()
    }

    handleClick = (e) => {
        e.preventDefault();
        $(".selected-option").removeClass("selected-option");
        $(e.currentTarget).addClass("selected-option");
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }

    render() {
        console.log(this.props)
        return(
            <div className="review-form-container">
                <form onSubmit={this.handleSubmit} className="review-form">Review
                    <textarea placeholder = 'Let us know what you think about the campsite!' value={this.state.body} onChange={this.update('body')}/>
                    
                    <label id='review-recommend'>
                        <span>Like this campsite?</span>
                        <div className="yes-no-buttons">
                            <button
                                id="review-true"
                                className="review-button selected-option"
                                onClick={this.handleClick}
                                data-recommend="true"
                            >
                                <i className="fas fa-thumbs-up"></i>
                            </button>

                            <button
                                id="review-false"
                                className="review-button selected-option"
                                onClick={this.handleClick}
                                data-recommend="false"
                            >
                                <i className="has fa-thumbs-down"></i>
                            </button>
                        </div>
                    </label>

                <button className="submit-review" type='submit'>Leave Review</button>
                <button className="review-exit">Close</button>
                </form>

            </div>
        )
    }

}

export default ReviewForm;