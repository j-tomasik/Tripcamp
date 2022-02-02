import React from 'react';

class ReviewEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommend: this.props.review.recommend,
            body: this.props.review.body,
            spot_id: this.props.spotId,
            author_id: this.props.authorId,
            id: this.props.review.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // console.log(this.props)
        // this.setRadio = this.setRadio.bind(this)
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.updateReview(review);
        this.props.history.replace(`/spots/${this.props.spotId}`)
    }

    onChange = (e) => {
        this.setState({
            recommend: e.currentTarget.value

        })
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    
    
    // setRadio() {
    //     if (this.props.review.recommend === true) {
    //         document.getElementById('true-input').setAttribute('checked', 'true')
    //     } else {
    //         document.getElementById('false-input').setAttribute('checked', 'true')
    //     }
    // }
    
    

    render() {
        if (!this.props.review) {
            return null
        }
        console.log('state rec', this.state.recommend)
        console.log('prop rec', this.props.review.recommend)
        // this.setRadio();

        // const checkedTrue = this.props.review.recommend === true ? true : false;
        // const checkedFalse = this.props.review.recommend === false ? true : false;
        // this.setRadio();
        return (
            <div className="review-form-container">
                <form onSubmit={this.handleSubmit} className="review-form">Review
                    <textarea placeholder={this.state.body} value={this.state.body} onChange={this.update('body')} />

                    <label id='review-recommend'>
                        <span>Like this campsite?</span>
                        <div className="yes-no-buttons">
                            <label className="recommend">Recommend

                                <input
                                    type="radio"
                                    value= {true}
                                    name="recommend"
                                    // checked={this.state.recommend}
                                    className="review-button"
                                        id="true-input"
                                    onChange={this.onChange}
                                />


                            </label>

                            <label className="recommend">Don't Recommend
                                <input
                                    type="radio"
                                    value={false}
                                    name="recommend"
                                    className="review-button"
                                    id="false-input"
                                    // checked={this.state.recommend}
                                    onChange={this.onChange}
                                />


                            </label>
                        </div>
                    </label>
                    <button className="submit-review" type='submit'>Leave Review</button>
                    <button className="review-exit">Close</button>
                </form>

            </div>
        )
    }

}

export default ReviewEditForm;




