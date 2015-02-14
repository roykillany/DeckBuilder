json.(user, :id, :username, :email)

user.decks do |deck|
  json.(deck, :creator_id, :name, :description)

  deck.cards.each do |card|
    json.(card, :deck_id, :name, :cmc)
  end
end
