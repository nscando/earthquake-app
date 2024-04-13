namespace :db do
  desc "Clear all data from all tables respecting foreign keys"
  task clear_data: :environment do
    Comment.delete_all
    Feature.delete_all
  end
end
