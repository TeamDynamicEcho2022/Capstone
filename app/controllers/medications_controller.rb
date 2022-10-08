class MedicationsController < ApplicationController
    def index
        medications = Medication.where(params[:user_id] == current_user.id)
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
        medication = Medication.find(params[:id])
        render json: medication, include: [:user]
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
