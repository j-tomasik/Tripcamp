class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :body, default: "", null: false
      t.boolean :recommend, null: false 
      t.integer :spot_id, null: false 
      t.integer :author_id, null: false 


      t.timestamps
    end
    add_index :reviews, :spot_id
  end
end
