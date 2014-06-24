  var throwControlTo = Rx.helpers.throwControlTo = function (action, observer) {
    try {
      action();
    } catch (e) {
      observer.onError(e);
    }
  };