class CreateIndustries < ActiveRecord::Migration[7.1]
  def change
    create_table :industries do |t|
      t.string :name
      t.string :recyclables
      t.string :companies
      t.belongs_to :material, null: false, foreign_key: true

      t.timestamps
    end
  end
end
