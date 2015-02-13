ChildrensCardGame.Views.HomePage = Backbone.View.extend({
  template: JST["homepage"],

  initialize: function (options) {
  },

  render: function () {
    var content = this.template({
      userPage: "#/users/"+ChildrensCardGame.currentUser.id
    });
    this.$el.html(content);
    return this;
  },

})
