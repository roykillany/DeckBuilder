ChildrensCardGame.Models.Deck = Backbone.Model.extend({
  urlRoot: "api/decks",

  parse: function(jsonResp){
    if(jsonResp.cards){
      var that = this;
      var count = jsonResp.cards.length;

      var i = 0;
      this.cards(count).forEach(function(a){
        a.set(jsonResp.cards)
      })
    }
  },

  cards: function(cardCount){
    var res = [];
    if(!this._cards){
      this._answers = new ChildrensCardGame.Collections.Cards();
      for(var i = 0; i < cardCount; i++){
        this._cards.add(new ChildrensCardGame.Models.Card());
      }
    }

    return this._cards;
  }
})
