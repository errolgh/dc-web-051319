class CreateGnomes < ActiveRecord::Migration[5.2]
  def change
    create_table :gnomes do |t|
      t.string :name
      t.string :hat_color

      t.timestamps
    end
  end
end
