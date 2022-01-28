# json.spot do 
    json.partial! '/api/spots/spot', spot: @spot
    json.photo_url url_for(@spot.photo) if @spot.photo.attached?
# end