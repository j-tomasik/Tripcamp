json.spot do 
    json.partial! '/api/spots/spot', spot: @spot
    json.photo_url url_for(@spot.photo) if @spot.photo.attached?
    json.reviewIds @spot.reviews.pluck(:id)
end

@bench.reviews.includes(:author).each do |review|
    json.reviews do 
        json.set! review.id do 
            json.partial! 'api/reviews/review', review: review
        end

    json.authors do 
        json.set! review.author.id do 
            json.extract! review.author, :id, :first_name, :last_name
        end
    end
end