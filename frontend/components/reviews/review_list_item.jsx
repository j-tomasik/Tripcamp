import React from 'react';


class ReviewListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='review-item'>
                <span className='body'>
                    {this.props.review.body}
                </span>
                //author name
                <span>
                    
                </span>

            </div>
        )
    }
}

export default ReviewListItem