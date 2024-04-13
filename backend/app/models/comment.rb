class Comment < ApplicationRecord
  # Relación con Feature
  belongs_to :feature

  # Validaciones
  validates :body, presence: true, length: { minimum: 2, maximum: 400 }

  end
