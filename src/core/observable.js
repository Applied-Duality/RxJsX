  var Observable = Rx.Observable = (function () {
    function Observable(onSubscribe) {
      this._onSubscribe = onSubscribe;
    }

    /**
     * Returns an Observable that will execute the specified function when a Subscriber subscribes to
     * it.
     */
    Observable.create = function (onSubscribe) {
      return new Observable(onSubscribe);
    };

    /**
     * Lift a function to the current Observable and return a new Observable that when subscribed to will pass
     * the values of the current Observable through the function.
     */
    Observable.prototype.lift = function (lift) {
      return new Observable(function (subscriber) {
        try {
          // TODO: Execute
        } catch (e) {
          subscriber.onError(e);
        }
      });
    };

    return Observable;    
  }());