Meteor.startup(function () {
  UserPresence.awayTime = 60000;

  UserPresence.awayOnWindowBlur = true;

  UserPresence.start();
});

Template.registerHelper('getUserStatus', function (userId) {
  if (userId) {
    var user = Meteor.users.findOne({
      _id: userId
    });
  } else {
    var user = Meteor.user();
  };
  if (user.status) {
    return user.status;
  } else {
    return "offline";
  }

});