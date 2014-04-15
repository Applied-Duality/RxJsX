  /**
   * Provides a mechanism for receiving push-based notifications.
   */
  var Subscriber = Rx.Subscriber = (function (__super__) {

    inherits(Subscriber, __super__);

    function Subscriber(compositeSubscription) {
      this._cs = compositeSubscription || new CompositeSubscription();
    }

    Subscriber.prototype.push = function(subscription) {
      return this._cs.push(subscription);
    };

    Subscriber.prototype.unsubscribe = function () {
      this._cs.unsubscribe();
    };

    return Subscriber;

  }(Observer));