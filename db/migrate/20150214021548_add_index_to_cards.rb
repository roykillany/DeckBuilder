class AddIndexToCards < ActiveRecord::Migration
  def change
    add_index :cards, :deck_id
    add_index :cards, :name
    add_index :cards, :cmc
  end
end
