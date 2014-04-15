  /**
   * Represents a subscription resource whose underlying subscription resource can be replaced by another subscription resource, causing automatic disposal of the previous underlying subscription resource.
   */
  var SerialSubscription = Rx.SerialSubscription = (function (super_) {
    inherits(SerialSubscription, super_);

    function SerialSubscription() {
      super_.call(this, false);
    }

    return SerialSubscription;
  }(BooleanSubscription));
