ChildrensCardGame.Collections.Users = Backbone.Collection.extend({
  url: "api/users",
  model: ChildrensCardGame.Models.User,

  getOrFetch: function (id) {
    var user = this.get(id);
    var that = this;

    if (user) {
      user.fetch();
    } else {
      user = new ChildrensCardGame.Models.User({id: id});
      user.fetch({
        success: function () {
          that.add(user);
        }
      })
    }
    return user;
  },

  comparator: function (user) {
    return user.escape("username")
  }
})
