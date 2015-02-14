class Deck < ActiveRecord::Base
  has_many(
    :cards,
    class_name: "Card",
    foreign_key: :deck_id,
    primary_key: :id
  )

  belongs_to(
    :creator,
    class_name: "User",
    foreign_key: :creator_id,
    primary_key: :id
  )
end
