  /**
   * Represents a disposable resource that only disposes its underlying disposable resource when all dependent disposable objects have been disposed.
   */  
  var RefCountSubscription = Rx.RefCountSubscription = (function () {

    function InnerSubscription(subscription) {
      this.subscription = subscription;
      this.subscription.count++;
      this.isInnerUnsubscribed = false;
    }

    InnerSubscription.prototype.unsubscribe = function () {
      if (!this.subscription.isUnsubscribed && !this.isInnerUnsubscribed) {
        this.isInnerUnsubscribed = true;
        this.subscription.count--;
        if (this.subscription.count === 0 && this.subscription.isPrimaryUnsubscribed) {
          this.subscription.isUnsubscribed = true;
          this.subscription.underlyingSubscription.unsubscribe();
        }
      }
    };

    /**
     * Initializes a new instance of the RefCountSubscription with the specified subscription.
     * @constructor
     * @param {Subscription} subscription Underlying subscription.
      */
    function RefCountSubscription(disposable) {
      this.underlyingSubscription = subscription;
      this.isUnsubscribed = false;
      this.isPrimaryUnsubscribed = false;
      this.count = 0;
    }

    /** 
     * Disposes the underlying disposable only when all dependent subscriptions have been unsubscribed 
     */
    RefCountSubscription.prototype.unsubscribe = function () {
      if (!this.isUnsubscribed && !this.isPrimaryUnsubscribed) {
        this.isPrimaryUnsubscribed = true;
        if (this.count === 0) {
          this.isUnsubscribed = true;
          this.underlyingSubscription.dispose();
        }
      }
    };

    /**
     * Returns a dependent subscription that when disposed decreases the refcount on the underlying subscription.      
     * @returns {Subscription} A subscription subscription contributing to the reference count that manages the underlying subscription's lifetime.
     */        
    RefCountSubscription.prototype.getSubscription = function () {
      return this.isUnsubscribed ? subscriptionEmpty : new InnerSubscription(this);
    };

    return RefCountSubscription;
  })();
