class CreateMaterials < ActiveRecord::Migration[7.1]
  def change
    create_table :materials do |t|
      t.string :name
      t.string :tips
      t.string :facts

      t.timestamps
    end
  end
end
