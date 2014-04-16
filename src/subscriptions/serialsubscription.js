  /**
   * Represents a subscription resource whose underlying subscription resource can be replaced by another subscription resource, causing automatic disposal of the previous underlying subscription resource.
   */
  var SerialSubscription = Rx.SerialSubscription = (function (__super__) {
    inherits(SerialSubscription, __super__);

    function SerialSubscription() {
      __super__.call(this, false);
    }

    return SerialSubscription;
  }(BooleanSubscription));
