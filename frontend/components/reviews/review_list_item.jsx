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

        // const reviewButtons = 
        //     currentUserId === review.userId ? (
        //         <div className='review-item-buttons'>
        //             <button className='edit-review' onClick={editForm}>
        //                 Edit
        //             </button>

        //             <button className='delete-review' onClick={handleDelete}>
        //                 Delete
        //             </button>
        //         </div>
        //     ) : (
        //         ''
        //     );
        

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

                {/* {reviewButtons} */}
            </div>
        )
    }
}

export default ReviewListItem