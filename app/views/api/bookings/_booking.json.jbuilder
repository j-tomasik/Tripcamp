json.extract! booking, :id, :start_date, :end_date, :spot_id, :user_id, :guests
json.spot booking.spot
json.user booking.user
json.spot_photo booking.spot.photo