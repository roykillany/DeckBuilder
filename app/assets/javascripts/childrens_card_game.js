window.ChildrensCardGame = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.currentUser = new ChildrensCardGame.Models.CurrentUser();
    this.currentUser.fetch();
    this.decks = new ChildrensCardGame.Collections.Decks();
    this.header = new ChildrensCardGame.Views.Header({
      el: "header"
    });
    new ChildrensCardGame.Routers.Router({
      $rootEl: $("#content")
    })
    Backbone.history.start();
  }
};

$(document).ready(function(){
  ChildrensCardGame.initialize();
});
