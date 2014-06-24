  // Functions to export
  function noop () { }
  function throwError(e) { throw e; }
  // inherits

  var AnonymousObserver = Rx.AnonymousObserver = (function (__super__) {

    inherits(AnonymousObserver, __super__);

    function AnonymousObserver(onNext, onError, onCompleted, subscription) {
      __super__.call(this);
      this._onNext = onNext;
      this._onError = onError || throwError;
      this._onCompleted = onCompleted || noop;
      this._subscription = subscription || new Subscription();
    }

    AnonymousObserver.initialize = function (onNext, onError, onCompleted, subscription) {
      return new AnonymousObserver(
        function (r,v) { onNext(v); },
        function (r,e) { onError ? onError(e) : throwError(e); },
        function (r) { onCompleted ? onCompleted() : noop(); },
        subscription
      );
    };

    var anonymousObserverPrototype = AnonymousObserver.prototype;

    anonymousObserverPrototype.onNext = function (v) {
      this._onNext(this, v);
    };

    anonymousObserverPrototype.onError = function (e) {
      this._onError(this, e);
    };

    anonymousObserverPrototype.onCompleted = function () {
      this._onCompleted();
    };

    return AnonymousObserver;

  }(ObserverBase));