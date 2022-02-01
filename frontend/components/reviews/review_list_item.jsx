import React from 'react';
import { useSelector } from 'react-redux';


class ReviewListItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete = (e) => {
            e.preventDefault();
            this.props.deleteReview(this.props.review.id);
            location.reload();
        }


    render() {

        const { review } = this.props;

        const { body } = review;


            
        
        const delete_button = (this.props.session === this.props.review.authorId ? <button onClick={this.handleDelete} className="review-delete-button">Delete Review</button> : null)
        const edit_button = (this.props.session === this.props.review.authorId ? <button onClick={this.handleUpdate} className="review-edit-button">Edit Review</button> : null)
        // console.log(this.props)
        return(
            <div className='review-item'>
                <span className='body'>
                    {body} 
                </span>
                <br />
                <div>
                    <span>
                        by {review.authorFirstName} 
                    </span>
                </div>

                <div className='author-btns'>
                    {delete_button}
                    {edit_button}
                </div>

                <div className='border'></div>
                
            </div>
        )
    }
}

export default ReviewListItem