class Spot < ApplicationRecord
    validates :name, :description, :lat, :lng, presence: true

    has_many :reviews
    #active storage association
    has_one_attached :photo


    # def average_rating
    #     reviews.average(:rating)
    # end
end
