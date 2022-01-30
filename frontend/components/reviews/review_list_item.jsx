import React from 'react';


class ReviewListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { review } = this.props;
        // const author = users[review.author_id];
        const { body } = review;
        // console.log(review)
        

        return(
            <div className='review-item'>
                <span className='body'>
                    {body} 
                </span>

                <div>
                    by {review.authorFirstName} 
                </div>
            </div>
        )
    }
}

export default ReviewListItem