require 'rails_helper'

RSpec.describe "Medications", type: :request do
  user = User.where(email: 'email@test.com').first_or_create(password: 'password', password_confirmation: 'password',first_name:'test', last_name:'subject' )
  describe "GET /index" do
    
  end
end
