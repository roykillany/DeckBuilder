class AddIndexToDecks < ActiveRecord::Migration
  def change
    add_index :decks, :creator_id
    add_index :decks, :name
  end
end
