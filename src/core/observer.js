  var Observer = Rx.Observer = (function () {
    function Constructor() {

    }

    Constructor.prototype.makeSafe = function() {
      return new SafeObserver(this);
    };

    return Constructor;
  }());

  var SafeObserver = (function (__super__) {

    function Constructor(downstream) {
      this._downstream = downstream;
    }

    Constructor.prototype.onCompleted = function () {

    };

  }(Observer));