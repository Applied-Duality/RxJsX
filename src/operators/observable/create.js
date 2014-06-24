  Observable.create = function (subscribe) {
    return new AnonymousObservable(function (obs) { return obs.add(subscribe(obs)); });
  };
