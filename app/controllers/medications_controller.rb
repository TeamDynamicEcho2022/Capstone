class MedicationsController < ApplicationController
    def index
    end
  
    def create
      medication = Medication.create(med_params)
      if medication.valid?
        render json: medication
      else
        render json: medication.errors, status: 422
      end
    end
  
    def update
    end
  
    def destroy
    end
  
    private
    def med_params
      params.require(:medication).permit(:drug_name, :drug_cat, :description, :strength, :frequency, :image, :user_id)
    end
end
