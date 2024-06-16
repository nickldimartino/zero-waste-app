class CreateEmissions < ActiveRecord::Migration[7.1]
  def change
    create_table :emissions do |t|
      t.string :name
      t.string :emissionType
      t.string :cause

      t.timestamps
    end
  end
end
