require 'rails_helper'

RSpec.describe "Medications", type: :request do
  user = User.where(email: 'email@test.com').first_or_create(password: 'password', password_confirmation: 'password',first_name:'test', last_name:'subject' )
  describe "GET medications#index" do
    it "gets a list of medications for user" do
      user.medications.create(
        drug_name: 'testdrug',
        drug_cat: 'uncategorizable',
        description: 'whatever',
        strength: '10000mcg',
        frequency: 'all the time',
        image: 'image.com',
        is_taken: false,
        user_id: user.id)

    get "/users/#{user.id}/medications"

    expect(user.medications.length).to eq 1
    expect(response).to have_http_status(200)
    end
  end

  describe "POST /create" do
    it 'creates a new medication for a user' do
    med_params = {
      medication: {
        drug_name: 'testdrug',
        drug_cat: 'uncategorizable',
        description: 'whatever',
        strength: '10000mcg',
        frequency: 'all the time',
        image: 'image.com',
        is_taken: false,
        user_id: user.id
      }
    }

    post "/users/#{user.id}/medications", params: med_params

    medication = Medication.last

    expect(response).to have_http_status(200)
    expect(medication['drug_name']).to eq 'testdrug'
    expect(medication['drug_cat']).to eq 'uncategorizable'
    expect(medication['description']).to eq 'whatever'
    expect(medication['strength']).to eq '10000mcg'
    expect(medication['frequency']).to eq 'all the time'
    expect(medication['user_id']).to eq 1
    end
  end
  describe "PATCH /users/:user_id/medications/:id" do
    it 'updates an existing medication within the database' do
      med_params = {
        medication: {
          drug_name: 'testdrug',
          drug_cat: 'uncategorizable',
          description: 'whatever',
          strength: '10000mcg',
          frequency: 'all the time',
          image: 'image.com',
          is_taken: false,
          user_id: user.id
        }
    }

    post "/users/#{user.id}/medications", params: med_params

    edit_params = {
      medication: {
        drug_name: 'editedtestdrug',
        drug_cat: 'editeduncategorizable',
        description: 'whatever',
        strength: '10000mcg',
        frequency: 'all the time',
        image: 'image.com',
        is_taken: false,
        user_id: user.id
      }
    }

    medication = Medication.first

    patch "/users/:user_id/medications/#{medication.id}", params: edit_params
    expect(response).to have_http_status(200)
    drugHash = JSON.parse(response.body).deep_symbolize_keys
    expect(drugHash[:drug_name]).to eq("editedtestdrug")
    end
  end
end