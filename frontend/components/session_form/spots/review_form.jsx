import React from "react";


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                recommend: true,
                body: '',
                spot_id: this.props.spotId,
                author_id: this.props.authorId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log('component initialize')
    };

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.createReview(review);
        // location.reload()
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }

    render() {
        console.log(this.props)
        return(
            <div className="review-form">
                <form onSubmit={this.handleSubmit}>Review
                    <textarea value={this.state.body} onChange={this.update('body')}/>
                
                <button className="submit-review" type='submit'>Leave Review</button>
                <button className="review-exit">Close</button>
                </form>

            </div>
        )
    }

}

export default ReviewForm;