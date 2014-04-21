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
  Observable.prototype.lift = function(transform) {
    return new LiftObservable(this, transform);
  };

  var LiftObservable = (function(__super__) {

    inherits(Constructor, __super__);

    function Constructor(downstream, transform) {
      this._downstream = downstream;
      this._transform = transform;
    }

    Constructor.prototype.unsafeSubscribe = function(observer) {
      this._downstream.unsafeSubscribe(transform(observer));
    };

    return Constructor;

  }(Observable));