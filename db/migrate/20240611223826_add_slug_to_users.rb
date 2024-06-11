class AddSlugToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :materials, :slug, :string 
    add_index :materials, :slug, unique: true
  end
end
