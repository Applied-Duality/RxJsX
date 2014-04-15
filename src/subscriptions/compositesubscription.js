  /**
   * Represents a group of disposable resources that are disposed together.
   * @constructor
   */
  var CompositeSubscription = Rx.CompositeSubscription = function () {
    this.subscriptions = argsOrArray(arguments, 0);
    this.isUnsubscribed = false;
    this.length = this.subscriptions.length;
  };

  var CompositeSubscriptionPrototype = CompositeSubscription.prototype;

  /**
   * Adds a disposable to the CompositeSubscription or disposes the disposable if the CompositeSubscription is disposed.
   * @param {Mixed} item Disposable to add.
   */    
  CompositeSubscriptionPrototype.push = function (item) {
    if (this.isUnsubscribed) {
      item.unsubscribe();
    } else {
      this.subscriptions.push(item);
      this.length++;
    }
    return this.length;
  };

  /**
   * Removes and disposes the first occurrence of a disposable from the CompositeSubscription.
   * @param {Mixed} item Disposable to remove.
   * @returns {Boolean} true if found; false otherwise.
   */
  CompositeSubscriptionPrototype.remove = function (item) {
    var shouldDispose = false;
    if (!this.isUnsubscribed) {
      var idx = this.subscriptions.indexOf(item);
      if (idx !== -1) {
        shouldDispose = true;
        this.subscriptions.splice(idx, 1);
        this.length--;
        item.unsubscribe();
      }
    }
    return shouldDispose;
  };

  /**
   *  Disposes all disposables in the group and removes them from the group.  
   */
  CompositeSubscriptionPrototype.unsubscribe = function () {
    if (this.isUnsubscribed) { return; }
    this.isUnsubscribed = true;
    var currentSubscriptions = this.subscriptions.slice(0);
    this.subscriptions = [];
    this.length = 0;

    for (var i = 0, len = currentSubscriptions.length; i < len; i++) {
      currentSubscriptions[i].unsubscribe();
    }
  };

  /**
   * Removes and disposes all disposables from the CompositeSubscription, but does not unsubscribe the CompositeSubscription.
   */   
  CompositeSubscriptionPrototype.clear = function () {
    var currentSubscriptions = this.subscriptions.slice(0);
    this.subscriptions = [];
    this.length = 0;
    for (var i = 0, len = currentSubscriptions.length; i < len; i++) {
      currentSubscriptions[i].unsubscribe();
    }
  };

  /**
   * Determines whether the CompositeSubscription contains a specific disposable.    
   * @param {Mixed} item Disposable to search for.
   * @returns {Boolean} true if the disposable was found; otherwise, false.
   */    
  CompositeSubscriptionPrototype.contains = function (item) {
    return this.subscriptions.indexOf(item) !== -1;
  };

  /**
   * Converts the existing CompositeSubscription to an array of subscriptions
   * @returns {Array} An array of disposable objects.
   */  
  CompositeSubscriptionPrototype.toArray = function () {
    return this.subscriptions.slice(0);
  };
  