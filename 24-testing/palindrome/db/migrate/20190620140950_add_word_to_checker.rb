class AddWordToChecker < ActiveRecord::Migration[5.2]
  def change
    add_column :checkers, :word, :string
  end
end
