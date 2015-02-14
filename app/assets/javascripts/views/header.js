ChildrensCardGame.Views.Header = Backbone.View.extend({
  template: JST["shared/header"],

  initialize: function(options){
    this.render();
  },

  events: {

  },

  render: function(){
    var content = this.template({
      currentUser: ChildrensCardGame.currentUser
    });

    this.$el.html(content);

    return this;
  },
});
