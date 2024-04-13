module Api
  class FeaturesController < ApplicationController
    def index

      mag_types = params[:mag_type]&.split(',')
      features = if mag_types.present?
                   Feature.where(mag_type: mag_types)
                 else
                   Feature.all
                 end

      per_page = [params[:per_page].to_i, 1000].max
      per_page = [per_page, 1000].min

      features = features.page(params[:page]).per(per_page)

      response = {
        data: features.includes(:comments).map do |feature|
                {
                  id: feature.id,
                  type: 'feature',
                  attributes: {
                    external_id: feature.external_id,
                    magnitude: feature.magnitude,
                    place: feature.place,
                    time: feature.created_at.to_s,
                    event_time: Time.at(feature.event_time).utc.to_datetime.iso8601,
                    tsunami: feature.tsunami,
                    mag_type: feature.mag_type,
                    title: feature.title,
                    coordinates: {
                      longitude: feature.longitude,
                      latitude: feature.latitude
                    }
                  },
                  links: {
                    external_url: feature.url
                  },
                  comments: feature.comments.empty? ? 'No comments yet.' : 
                            feature.comments.map do |comment|
                              {
                                id: comment.id,
                                body: comment.body,
                                created_at: comment.created_at.to_s
                              }
                            end
                }
              end,
        pagination: {
          current_page: features.current_page,
          total: features.total_count,
          per_page: features.limit_value
        }
      }

      render json: response
    end
  end
end
