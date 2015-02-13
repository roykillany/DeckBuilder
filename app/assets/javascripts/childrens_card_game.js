window.ChildrensCardGame = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.currentUser = new ChildrensCardGame.Models.CurrentUser();
    this.currentUser.fetch();
    this.decks = new ChildrensCardGame.Collections.Models();

    Backbone.history.start();
  }
};

$(document).ready(function(){
  ChildrensCardGame.initialize();
});
