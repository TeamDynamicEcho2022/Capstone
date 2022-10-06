class CreateMedications < ActiveRecord::Migration[7.0]
  def change
    create_table :medications do |t|
      t.references :user, null: false, foreign_key: true
      t.string :drug_name
      t.string :drug_cat
      t.string :description
      t.string :strength
      t.string :frequency
      t.string :image
      t.boolean :is_taken

      t.timestamps
    end
  end
end
