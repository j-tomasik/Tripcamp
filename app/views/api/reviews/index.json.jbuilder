@reviews.each do |review|     
    json.set! review.id do         
        json.extract! review, :id, :author_id, :spot_id, :body, :created_at, :updated_at         
        json.author_first_name review.author.firstname         
        json.author_last_name review.author.lastname     
    end 
end