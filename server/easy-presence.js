Meteor.startup(function () {
  UserPresenceMonitor.start();
  UserPresence.activeLogs();
  UserPresence.start();
});