  /**
   * Represents a subscription resource which only allows a single assignment of its underlying subscription resource.
   * If an underlying subscription resource has already been set, future attempts to set the underlying subscription resource will throw an Error.
   */
  var SingleAssignmentSubscription = Rx.SingleAssignmentSubscription = (function (__super__) {
    inherits(SingleAssignmentSubscription, __super__);

    function SingleAssignmentSubscription() {
      __super__.call(this, true);
    }

    return SingleAssignmentSubscription;
  }(BooleanSubscription));
