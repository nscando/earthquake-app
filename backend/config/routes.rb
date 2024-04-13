Rails.application.routes.draw do
  namespace :api do

    resources :features, only: [:index, :create, :show] do

      resources :comments, only: [:create]
    end
  end

  get "up" => "rails/health#show", as: :rails_health_check

end
