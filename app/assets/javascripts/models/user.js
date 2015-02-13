ChildrensCardGame.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  toJSON: function () {
    return {user: this.attributes}
  }

});

ChildrensCardGame.Models.CurrentUser = ChildrensCardGame.Models.User.extend({
  url: "/api/session",

  initialize: function (options) {
    this.listenTo(this, "change", this.fireSessionEvent);
  },

  isSignedIn: function () {
    return !this.isNew()
  },

  signIn: function (options) {
    var model = this;
    var credentials = {
      "user[username]": options.username,
      "user[email]": options.email,
      "user[password]": options.password
    };

    $.ajax({
      url: this.url,
      type: "POST",
      data: credentials,
      dataType: "json",
      success: function (data) {
        model.set(data);
        Backbone.history.navigate("users/"+model.id, {trigger:true});
        options.success && options.success();
      },
      error: function(){
        options.error && options.error();
      }
    });
  },

  signOut: function (options) {
    var model = this;
    var options = options || {}

    $.ajax({
      url: this.url,
      type: "DELETE",
      dataType: "json",
      success: function (data) {
        model.clear()
        Backbone.history.navigate("", {trigger:true});
        options.success && options.success()
      }
    });
  },

  fireSessionEvent: function () {
    if (this.isSignedIn()){
      this.trigger("signIn");
      console.log("currentUser is signed in", this);
    } else {
      this.trigger("signOut");
      console.log("currentUser is signed out", this);
    }
  }



});
