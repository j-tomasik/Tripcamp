@spots.each do |spot|
    json.set! spot.id do 
        json.partial! 'spot', spot: spot
        json.photo_url url_for(spot.photo) if spot.photo.attached?
    end
    
end