export const fetchAllReviews = (spotId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/spots/${spotId}/reviews`
    });
}



// export const fetch