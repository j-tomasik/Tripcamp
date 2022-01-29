import React from 'react';
import { connect } from 'react-redux';


class Review extends React.Component {
    constructor(props){
        super(props)

    }

    render() {

        const {review, author } = this.props;
        const { rating, body } = review;
        const lastnameArr = author.lastname.split('');
        const initial = lastnameArr[0];
        
        return(
            <div>
                <ul>
                    <li>Rating: {rating} </li>
                    <li>{body} by {author.firstname} {initial}</li>
                </ul>
            </div>
        );
    }

};

const mSTP = ({entities: { users }}, { review }) => {
    return {
        author: users[review.author_id]
    };
};

export default connect(mSTP)(Review)