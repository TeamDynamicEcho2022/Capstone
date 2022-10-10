class IsTakenDefaultToFalse < ActiveRecord::Migration[7.0]
  def change
    change_column_default(:medications,:is_taken, false)
  end
end
