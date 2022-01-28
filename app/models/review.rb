class Review < ApplicationRecord
    validates :recommend, inclusion: { in: [true, false] }

    belongs_to :spot 
    belongs_to :author,
        class_name: :User

end
