class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :name
      t.string :description
      t.float :lat
      t.float :lng 

      t.timestamps
    end
  end
end
