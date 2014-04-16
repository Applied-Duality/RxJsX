  
  /**
   * The Observable class that implements the Reactive Pattern.
   * This class provides methods for subscribing to the Observable as well as delegate methods to the various
   * Observers.   
   */
  var Observable = Rx.Observable = (function () {
    function Observable(onSubscribe) {
      this._onSubscribe = onSubscribe;
      this._executionHook = defaultExecutionHook;
    }

    /**
     * Returns an Observable that will execute the specified function when a Subscriber subscribes to
     * it.
     * @param {Function} f
     *   Function to be executed when Observable#subscribe(subscriber) is called     
     */
    Observable.create = function (onSubscribe) {
      return new Observable(onSubscribe);
    };

    /**
     * Lift a function to the current Observable and return a new Observable that when subscribed to will pass
     * the values of the current Observable through the function.
     * 
     * In other words, this allows chaining Observers together on an Observable for acting on the values within
     * the Observable.
     * 
     * observable.map(...).filter(...).take(5).lift(new ObserverA()).lift(new ObserverB(...)).subscribe()
     * 
     * 
     * @param {Operator} lift
     * @returns {Observable} an Observable that emits values that are the result of applying the bind function to the values
     *   of the current Observable     
     */
    Observable.prototype.lift = function (lift) {
      var self = this;
      return new Observable(function (o) {
        try {
          self._onSubscribe(self._executionHook.onLift(o));
        } catch (e) {
          subscriber.onError(o);
        }
      });
    };

    return Observable;    
  }());