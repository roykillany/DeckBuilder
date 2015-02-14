class CreateDecks < ActiveRecord::Migration
  def change
    create_table :decks do |t|
      t.integer :creator_id, null: false
      t.string :name, null: false
      t.text :description

      t.timestamps null: false
    end
  end
end
