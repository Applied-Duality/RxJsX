  var ObserverBase = Rx.internals.ObserverBase = (function(__super__) {

    inherits(Constructor, __super__);

    function Constructor() { 
      this._subscription = new Subscription();
    }

    Constructor.prototype.length = function () {
      return this._subscription.length();
    };

    Constructor.prototype.onCompleted = function () {
      this._subscription.unsubscribe();
    };

    Constructor.prototype.onError = function (error) {
      this._subscription.unsubscribe();
      throw error;
    };

    Constructor.prototype.unsubscribe = function () {
      this._subscription.unsubscribe();
    };

    Constructor.prototype.push = function (item) {
      return this._subscription.push(item);
    };

    Constructor.prototype.remove = function (item) {
      return this._subscription.remove(item);
    };

    Constructor.prototype.clear = function () {
      this._subscription.clear();
    };

    return Constructor;
  }(Observer));