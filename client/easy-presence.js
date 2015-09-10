Meteor.startup(function () {
  UserPresence.awayTime = 60000;

  UserPresence.awayOnWindowBlur = true;

  UserPresence.start();
});