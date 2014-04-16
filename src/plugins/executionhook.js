  /**
   * Abstract ExecutionHook with invocations at different lifecycle points of {@link Observable} execution with a
   * default no-op implementation.
   */
  var ExecutionHook = Rx.ExecutionHook = (function () {

    function ExecutionHook() { }

    /** 
     * Invoked during the construction by Observable#create(OnSubscribe)
     * <p>
     * This can be used to decorate or replace the onSubscribe function or just perform extra
     * logging, metrics and other such things and pass-thru the function.
     * 
     * @param {Function} f
     *            original function to be executed
     * @returns {Function} function that can be modified, decorated, replaced or just
     *         returned as a pass-thru
     */     
     */
    ExecutionHook.prototype.onCreate = function (f) {
      return f;
    };

    /**
     * Invoked before Observable#subscribe(rx.Subscriber) is about to be executed.
     * <p>
     * This can be used to decorate or replace the onSubscribe function or just perform extra
     * logging, metrics and other such things and pass-thru the function.
     * 
     * @param {Observable} observableInsance
     *            original observable to be executed
     * @returns {Function} onSubscribe function that can be modified, decorated, replaced or just
     *         returned as a pass-thru
     */
    ExecutionHook.prototype.onSubscribeStart = function (observableInsance, onSubscribe) {
      return onSubscribe;
    };

    /**
     * Invoked after successful execution of Observable#subscribe(rx.Subscriber) with returned
     * Subscription.
     * <p>
     * This can be used to decorate or replace the {@link Subscription} instance or just perform extra logging,
     * metrics and other such things and pass-thru the subscription.
     * 
     * @param {Subscription} subscription
     *            original subscription
     * @return {Subscription} subscription that can be modified, decorated, replaced or just returned as a
     *         pass-thru
     */
    ExecutionHook.prototype.onSubscribeReturn = function(subscription) {
      return subscription;
    };

    /**
     * Invoked just as the operator functions is called to bind two operations together into a new
     * Observable and the return value is used as the lifted function
     * <p>
     * This can be used to decorate or replace the Operator instance or just perform extra
     * logging, metrics and other such things and pass-thru the onSubscribe.
     * 
     * @param {Operator} lift 
     *            original operator
     * @returns {Operator} function that can be modified, decorated, replaced or just
     *         returned as a pass-thru
     */
    ExecutionHook.prototype.onLift = function(lift) {
      return lift;
    };

    return ExecutionHook;
  }());

  var defaultExecutionHook = Rx.plugins.defaultExecutionHook = new ExecutionHook();