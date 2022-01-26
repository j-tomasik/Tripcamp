class Spot < ApplicationRecord
    validates :name, :description, :lat, :lng, presence: true

    #active storage association
    has_one_attached :photo
end
