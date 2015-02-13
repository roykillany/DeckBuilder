ChildrensCardGame.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "homePage",
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
