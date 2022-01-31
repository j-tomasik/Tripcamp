import React from 'react';
import { useSelector } from 'react-redux';


class ReviewListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { review } = this.props;
        // const author = users[review.author_id];
        const { body } = review;
        // const currentUserId = useSelector((state) => state.ession.id)
        // console.log(review)

        // const handleDelete = (e) => {
        //     e.preventDefault();
        //     dispatchEvent(deleteReview(review.id))
        // }
        
            // console.log(this.props.session)
        
            console.log(this.props.review)
        
        const delete_button = (this.props.session === this.props.review.authorId ? <button onClick={this.handleDelete} className="review-delete-button">Delete Review</button> : null)
        const edit_button = (this.props.session === this.props.review.authorId ? <button onClick={this.handleUpdate} className="review-edit-button">Edit Review</button> : null)

        return(
            <div className='review-item'>
                <span className='body'>
                    {body} 
                </span>
                
                <div>
                    <span>
                        by {review.authorFirstName} 
                    </span>
                </div>

                <div className='author-btns'>
                    {delete_button}
                    {edit_button}
                </div>
                
            </div>
        )
    }
}

export default ReviewListItem