class MedicationsController < ApplicationController
    def index
        medications = Medication.all
        render json: medications
    end
  
    def create
      medication = Medication.create(med_params)
      if medication.valid?
        render json: medication
      else
        render json: medication.errors, status: 422
      end
    end

    def show
        user = User.find(params[:id])
        render json: user, include: [:medication]
    end
  
    def update
        medication = Medication.find(params[:id])
        medication.update(med_params)
        if medication.valid?
            render json: medication
        else
            render json: medication.errors
        end
    end
  
    def destroy
        medication = Medication.find(params[:id])
        if medication.destroy
            render json: medication
        else
            render json: medication.errors
        end
    end
  
    private
    def med_params
      params.require(:medication).permit(:drug_name, :drug_cat, :description, :strength, :frequency, :image, :user_id)
    end
end
