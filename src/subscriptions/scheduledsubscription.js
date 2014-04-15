  function ScheduledSubscription(scheduler, subscription) {
    this.scheduler = scheduler;
    this.subscription = subscription;
    this.isUnsubscribed = false;
  }

  ScheduledSubscription.prototype.unsubscribe = function () {
    var parent = this;
    this.scheduler.schedule(function () {
      if (!parent.isUnsubscribed) {
        parent.isUnsubscribed = true;
        parent.subscription.unsubscribe();
      }
    });
  };
