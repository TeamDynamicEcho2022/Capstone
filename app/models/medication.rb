class Medication < ApplicationRecord
  belongs_to :user
  validates :drug_name, :drug_cat, :description, :strength, :frequency, :image, :user_id, presence: true
  validates_inclusion_of :is_taken, :in => [true, false]

  after_update :is_taken_false
     def is_taken_false
      if (frequency == 'Every Day' && is_taken == true) 
        UpdateBoolJob.set(wait: 1.day).perform_later(id)
      elsif (frequency == 'Every Other Day' && is_taken == true)
        UpdateBoolJob.set(wait: 48.hours).perform_later(id)
      elsif (frequency == 'Every 4 Hours' && is_taken == true)
        UpdateBoolJob.set(wait: 4.hours).perform_later(id)
      elsif (frequency == 'Every 6 Hours/ Four Times a Day' && is_taken == true)
        UpdateBoolJob.set(wait: 6.hours).perform_later(id)
      elsif (frequency == 'Every 8 Hours/ Three Times a Day' && is_taken == true)
        UpdateBoolJob.set(wait: 8.hours).perform_later(id)
      elsif (frequency == 'Once a Week' && is_taken == true)
        UpdateBoolJob.set(wait: 7.days).perform_later(id)
      end
    end
end

