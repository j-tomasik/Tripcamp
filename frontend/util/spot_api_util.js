
export const fetchSpots = () => {
    return $.ajax({
        method: 'GET',
        url:'/api/spots',
        error: (err) => console.log(err)
    })
}

export const fetchSpot = spotId => {
    return $.ajax({
        method: 'GET',
        url: `/api/spots/${spotId}`
    })
}

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: { review }
    })
);