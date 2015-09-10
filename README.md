## Easy-presence
I took [konecty:user-presence](https://github.com/Konecty/meteor-user-presence) and simplified it so you only need to add one handlebars expression where you want to see the status of that user's presence. <br><br>
###Add with: 
```
meteor add jeffrey:easy-presence
```
<br>
Note: This package has two defaults:<br>
1. Time of inactivity to set user as away is set automatically to one minute. <br>
2. User is automatically set as away when window loses focus.
<br><br>

##Directions:
Add 
```{{> easy_presence}}``` in your client-side code. You will see a circle icon showing that user's presence status. See this example: http://user-presence-example.meteor.com/

###Example: 
####Html:
```javascript
<template name="userList">
  {{#each users}}
    <li>{{> easy_presence}}{{emails.[0].address}}</li>
  {{/each}}
</template>
```

####Javascript
```javascript
Template.userList.helpers({
  'users': function () {
    return Meteor.users.find();
  }
});
```
