require 'rails_helper'

RSpec.describe Medication, type: :model do
  user = User.where(email: 'email@test.com').first_or_create(password: 'password', password_confirmation: 'password',first_name:'test', last_name:'subject' )
  it 'should have a drug name' do
    medication = user.medications.create(
      drug_cat: 'uncategorizable',
      description: 'whatever',
      strength: '10000mcg',
      frequency: 'all the time',
      image: 'image.com',
      is_taken: false,
      user_id: user.id
    )
    expect(medication.errors[:drug_name]).to_not be_empty
  end
  it 'should have a drug category' do
    medication = user.medications.create(
      drug_name: 'testdrug',
      description: 'whatever',
      strength: '10000mcg',
      frequency: 'all the time',
      image: 'image.com',
      is_taken: false,
      user_id: user.id
    )
    expect(medication.errors[:drug_cat]).to_not be_empty
  end
  it 'should have a description' do
    medication = user.medications.create(
      drug_name: 'testdrug',
      drug_cat: 'somecategory',
      strength: '10000mcg',
      frequency: 'all the time',
      image: 'image.com',
      is_taken: false,
      user_id: user.id
    )
    expect(medication.errors[:description]).to_not be_empty
  end
  it 'should have a strength' do
    medication = user.medications.create(
      drug_name: 'testdrug',
      drug_cat: 'somecategory',
      description: 'descriptionhere',
      frequency: 'all the time',
      image: 'image.com',
      is_taken: false,
      user_id: user.id
    )
    expect(medication.errors[:strength]).to_not be_empty
  end
  it 'should have a frequency' do
    medication = user.medications.create(
      drug_name: 'testdrug',
      drug_cat: 'somecategory',
      description: 'descriptionhere',
      strength: '10000mcg',
      image: 'image.com',
      is_taken: false,
      user_id: user.id
    )
    expect(medication.errors[:frequency]).to_not be_empty
  end
  it 'should have an image' do
    medication = user.medications.create(
      drug_name: 'testdrug',
      drug_cat: 'somecategory',
      description: 'descriptionhere',
      strength: '10000mcg',
      frequency: 'all the time',
      is_taken: false,
      user_id: user.id
    )
    expect(medication.errors[:image]).to_not be_empty
  end
end
