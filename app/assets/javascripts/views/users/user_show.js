ChildrensCardGame.Views.UserShow = Backbone.View.extend({
  template: JST["users/show"],

  initialize: function(options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    "click button": "signOut"
  },

  signOut: function(event) {
    ChildrensCardGame.currentUser.signOut();
  },

  render: function() {
    var content = this.template({
      user: this.model,
      username: this.model.escape('username')
      });
    this.$el.html(content);

    return this;
  }
})
