class AddEventTimeToFeatures < ActiveRecord::Migration[7.1]
  def change
    add_column :features, :event_time, :datetime
  end
end
