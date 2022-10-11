class Medication < ApplicationRecord
  belongs_to :user
  validates :drug_name, :drug_cat, :description, :strength, :frequency, :image, :user_id, presence: true
  validates_inclusion_of :is_taken, :in => [true, false]
end
