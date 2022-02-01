import React from 'react';
import ReviewListItem from './review_list_item'


class ReviewList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const reviews = this.props.reviews.map((review, idx) => <ReviewListItem key={idx} session={this.props.session} review={review} deleteReview={this.props.deleteReview}/>)
        const count = this.props.reviews.length ? <h3>{this.props.reviews.length} Reviews</h3> : <h3>No review yet</h3>
    
        return(
            <div className='spot-review'>
                <span className='review-count'>{count}</span>
                <div className='reviews'>
                    {reviews}
                </div>
            </div>
        )
    
    }
}

export default ReviewList;