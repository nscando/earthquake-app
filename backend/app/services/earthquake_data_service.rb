require 'net/http'
require 'json'

class EarthquakeDataService
  USGS_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'

  def call
    uri = URI(USGS_URL)
    response = Net::HTTP.get(uri)
    data = JSON.parse(response)
    
    data['features'].each do |feature_data|
      event_time = Time.at(feature_data['properties']['time'] / 1000)

      Feature.create_with(
        title: feature_data['properties']['title'],
        url: feature_data['properties']['url'],
        place: feature_data['properties']['place'],
        magnitude: feature_data['properties']['mag'],
        longitude: feature_data['geometry']['coordinates'][0],
        latitude: feature_data['geometry']['coordinates'][1],
        tsunami: feature_data['properties']['tsunami'] == 1,
        mag_type: feature_data['properties']['magType'],
        event_time: event_time
      ).find_or_create_by(external_id: feature_data['id'])
    end
  end
end
