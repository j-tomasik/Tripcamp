class Booking < ApplicationRecord
    validates :start_date, :end_date, :user_id, :spot_id, presence: true

    blongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: :Spot
end
