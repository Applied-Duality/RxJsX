  /**
   * Provides a set of static methods for creating Subscriptions.
   *
   * @constructor 
   * @param {Function} dispose Action to run during the first call to unsubscribe. The action is guaranteed to be run at most once.
   */
  var Subscription = Rx.Subscription = function (action) {
    this.isUnsubscribed = false;
    this.action = action || noop;
  };

  /** Performs the task of cleaning up resources. */     
  Subscription.prototype.unsubscribe = function () {
    if (!this.isUnsubscribed) {
      this.action();
      this.isUnsubscribed = true;
    }
  };

  /**
   * Creates a subscription object that invokes the specified action when unsubscribed.
   * @param {Function} action Action to run during the first call to dispose. The action is guaranteed to be run at most once.
   * @return {Subscription} The subscription object that runs the given action upon disposal.
   */
  var subscriptionCreate = Subscription.create = function (action) { return new Subscription(action); };

  /** 
   * Gets the disposable that does nothing when disposed. 
   */
  var subscriptionEmpty = Subscription.empty = { dispose: noop };
