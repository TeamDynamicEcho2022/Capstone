class UpdateBoolJob < ApplicationJob
  queue_as :default

  def perform(id)
    medication = Medication.find id
    medication.is_taken = false
    medication.save
  end
end
