class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.integer :deck_id, null: false
      t.string :name, null: false
      t.integer :cmc, null: false

      t.timestamps null: false
    end
  end
end
