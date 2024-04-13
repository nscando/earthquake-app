class CreateFeatures < ActiveRecord::Migration[7.1]
  def change
    create_table :features do |t|
      t.string :external_id
      t.string :title
      t.string :url
      t.string :place
      t.float :magnitude
      t.float :longitude
      t.float :latitude
      t.boolean :tsunami
      t.string :mag_type

      t.timestamps
    end
  end
end
