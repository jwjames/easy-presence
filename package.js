Package.describe({
  name: 'jeffrey:easy-presence',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'An incredibly easy user-presence package based on konecty:user-presence',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jwjames/easy-presence',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use([
    'templating',
    'underscore',
    'tracker',
    'mongo'
  ], ['client', 'server']
  );

  api.use([
    'konecty:user-presence@1.2.5'
  ], ['client', 'server']);

  api.addFiles([
    'client/easy-presence.css',
    'client/easy-presence.html',
    'client/easy-presence.js'
  ], ['client']);

    api.addFiles([
    'server/easy-presence.js'
  ], ['server']);
});