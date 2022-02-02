class Spot < ApplicationRecord
    validates :name, :description, :lat, :lng, presence: true

    has_many :reviews
        foreign_key: :spot_id,
        class_name: :Review
    #active storage association
    has_one_attached :photo

    has_many :bookings,
        foreign_key: :spot_id,
        class_name: :Booking


    # def average_rating
    #     reviews.average(:rating)
    # end
end
