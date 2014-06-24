  var AnonymousObservable = Rx.AnonymousObservable = (function (__super__) {

    inherits(AnonymousObservable, __super__);

    function AnonymousObservable(onSubscribe) {
      guard(onSubscribe, 'onSubscribe');
      __super__.call(this);
      this._onSubscribe = onSubscribe;
    }

    AnonymousObservable.prototype.onSubscribe(observer) {
      this._onSubscribe(observer);
    };

    return AnonymousObservable;

  }(ObservableBase));