class AddPenNameToAuthors < ActiveRecord::Migration[5.2]
  def change
    # table_name, column_name, :string
    add_column :authors, :penname, :string
  end
end
