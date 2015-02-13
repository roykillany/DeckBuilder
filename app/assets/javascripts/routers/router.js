ChildrensCardGame.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.collection = new ChildrensCardGame.Collections.Users();
    this.collection.fetch();
  },

  routes: {
    "": "homePage",
    "session/new": "signIn",
    "users/new": "newUser",
    "users/:id": "userShow"
  },

  homePage: function(){
    var homePageView = new ChildrensCardGame.Views.HomePage({

    });

    this._swapView(homePageView);
  },

  signIn: function(callback){
    if(!this._requireSignedOut(callback)){ return; }

    var signInView = new ChildrensCardGame.Views.SignIn({
      callback: callback
    });

    this._swapView(signInView);
  },

  newUser: function () {
    if (!this._requireSignedOut()) {return;}

    var model = new this.collection.model();
    var formView = new ChildrensCardGame.Views.SignUp({
      collection: this.collection,
      model: model
    });

    this._swapView(formView);
  },

  userShow: function (id) {
    var callback = this.userShow.bind(this, id)
    if (!this._requireSignedIn(callback)) {return ;}

    var model = this.collection.getOrFetch(id);
    var showView = new ChildrensCardGame.Views.UserShow({
      model: model
    });

    this._swapView(showView);
  },

  _requireSignedIn: function(callback){
    if(!ChildrensCardGame.currentUser.isSignedIn()){
      callback = callback || this._goHome.bind(this);
      this.signIn(callback);
      return false;
    }

    return true;
  },

  _requireSignedOut: function(callback){
    if(ChildrensCardGame.currentUser.isSignedIn()){
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    }

    return true;
  },

  _goHome: function(){
    Backbone.history.navigate("", { trigger: true });
  },

  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
