ChildrensCardGame.Views.HomePage = Backbone.View.extend({
  template: JST["homepage"],

  initialize: function (options) {
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

})
