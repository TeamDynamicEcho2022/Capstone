require 'rails_helper'

RSpec.describe User, type: :model do
    user = User.where(email: 'email@test.com').first_or_create(password: 'password', password_confirmation: 'password',first_name:'test', last_name:'subject' )
    it 'should have a first_name' do
        user = User.create(
            last_name: 'subject',
            email: 'email@test.com',
            password: 'password',
        )
        expect(user.errors[:first_name]).to_not be_empty
    end
    it 'should have a last_name' do
        user = User.create(
            first_name: 'matters',
            email: 'email@test.com',
            password: 'password',
        )
        expect(user.errors[:last_name]).to_not be_empty
    end
    it 'should have an email' do
        user = User.create(
            first_name: 'matters',
            last_name: 'zero',
            password: 'password',
        )
        expect(user.errors[:email]).to_not be_empty
    end
    it 'should have a password' do
        user = User.create(
            first_name: 'matters',
            last_name: 'expert',
            email: 'email@test.com',
        )
        expect(user.errors[:password]).to_not be_empty
    end
end