  var AnonymouseObservable = Rx.internals.AnonymouseObservable = (function (__super__) {

    inherits(Constructor, __super__)

    function Constructor(unsafeSubecribe) {
      this._unsafeSubscribe = unsafeSubecribe;
    }

    Constructor.prototype.unsafeSubecribe = function (observer) {
      this._unsafeSubscribe(observer);
    }

    return Constructor;

  }(Observable));