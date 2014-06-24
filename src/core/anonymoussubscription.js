  // imports
  function noop () { }
  function inherits(child, parent) { }

  var AnonymousSubscription = Rx.AnonymousSubscription = (function (__super__) {

    inherits(AnonymousSubscription, __super__);

    function AnonymousSubscription(action) {
      __super__.call(this);
      this._action = action || noop;
    }

    AnonymousSubscription.prototype.unsubscribe = AnonymousSubscription.prototype.dispose = function () {
      this._action();
      __super__.unsubscribe();
    }

    return AnonymousSubscription;

  }(Subscription));