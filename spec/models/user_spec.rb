require 'rails_helper'

RSpec.describe User, type: :model do
  it "is not valid without an email" do
    user = User.new(email: nil, password: "123456", password_confirmation: "123456", first_name: "test", last_name: "lastname")
    expect(user).to_not be_valid
  end
  it "is not valid without an password" do
    user = User.new(email: "test@test.com", password: nil, password_confirmation: nil, first_name: "test", last_name: "lastname")
    expect(user).to_not be_valid
  end

  it "is not valid without a first name" do
    user = User.new(email: "test@test.com", password: "123456", password_confirmation: "123456", first_name: nil, last_name: "lastname")
    expect(user).to_not be_valid
  end
  it "is not valid without a last name" do
    user = User.new(email: "test@test.com", password: "123456", password_confirmation: "123456", first_name: "test", last_name: nil)
    expect(user).to_not be_valid
  end
  it "is valid" do
    user = User.new(email: "test@test.com", password: "123456", password_confirmation: "123456", first_name: "test", last_name: "lastname")
    expect(user).to be_valid
  end
end
