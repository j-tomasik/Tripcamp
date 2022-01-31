export const selectSpot = ( { spots }, spotId ) => {
    return spots[spotId];
};

export const selectReviews = ({ reviews }, spot) => {
    //////
    return spot.reviewIds.map(
        reviewId => reviews[reviewId]);
}
// export const selectReviewsForSpot = ({ spots, reviews}, spot) => {
//     return spot.reviewIds.map(reviewId => reviews[reviewId]);
// };

export const asArray = ({ spots }) => (
    Object.keys(spots).map(key => spots[key])
)

