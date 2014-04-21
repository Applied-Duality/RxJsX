  var Observable = Rx.Observable = (function () {  


    /**
     * Returns an Observable that will execute the specified function when a Subscriber subscribes to
     * it.
     * @param {Function} f
     *   Function to be executed when Observable#subscribe(subscriber) is called     
     */
    Observable.create = function (onSubscribe) {
      return new Observable(onSubscribe);
    };

    Observable.prototype.subscribe = function (observer) {
      var safeObserver = observer.makeSafe();
      this.unsafeSubscribe(safeObserver);
      return safeObserver;
    };

    return Observable;    
  }());