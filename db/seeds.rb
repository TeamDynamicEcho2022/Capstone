# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
user = User.where(email: 'test@example.com').first_or_create(password: 'password', password_confirmation: 'password', first_name:'joe', last_name:'guy')

medications = [
    {
        drug_name: 'Atorvastatin',
        drug_cat: 'HMG-CoA reductase inhibitor',
        description: 'For treatment of high cholesterol',
        strength: '10mg',
        frequency: 'every day',
        image: 'https://cdn.honeybeehealth.com/product_units/lipitor-tablet-10mg', 
        is_taken: false
    }, 
    {
        drug_name: 'Gabapentin',
        drug_cat: 'Anticonvulsant',
        description: 'Prevent seizures and relieve pain for certain conditions in the nervous system',
        strength: '300mg',
        frequency: 'every day',
        image: 'https://www.grxstatic.com/d4fuqqd5l3dbz/products/cwf_tms/DrugItem_14345.PNG',
        is_taken: false
    },
    {
        drug_name: 'Azithromycin',
        drug_cat: 'Macrolide Antibiotic',
        description: 'Used for treatment of bacterial infections',
        strength: '250mg',
        frequency: 'every day',
        image: 'https://www.grxstatic.com/d4fuqqd5l3dbz/products/DrugItem_28720.JPG', 
        is_taken: false
    }, 
]

medications.each do |medication|
    user.medications.create!(medication)
    p "added: #{medication}"
  end