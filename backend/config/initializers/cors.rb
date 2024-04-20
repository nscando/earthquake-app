# config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:5174', '127.0.0.1:5174'  # Asegúrate de cambiar esto si tu entorno de frontend es diferente.

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true  # Si necesitas soportar cookies/sessiones entre dominios, debes habilitar esto.
  end
end
