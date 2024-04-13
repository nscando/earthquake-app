namespace :earthquake_data do
  desc "Fetch earthquake data from USGS"
  task fetch: :environment do
    EarthquakeDataService.new.call
  end
end