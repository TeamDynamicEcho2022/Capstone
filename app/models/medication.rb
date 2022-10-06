class Medication < ApplicationRecord
  belongs_to :user
  validates :drug_name, :drug_cat, :description, :strength, :frequency, :image, :is_taken, :user_id, presence: true
end
