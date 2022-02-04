@bookings.each do |booking|
    json.set! booking.id do 
        json.extract! booking, :id, :start_date, :end_date, :spot_id, :user_id, :guests
        json.spot booking.spot
        json.user booking.user
        json.spot_photo url_for(booking.spot.photo)
        # json.partial! 'booking', booking: @booking
    end
end