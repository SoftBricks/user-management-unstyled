Package.describe({
  name: 'softbricks:user-management-unstyled',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.use(['templating'], 'client');

  api.use('softbricks:user-management@0.0.1', ['client', 'server']);
  api.imply('softbricks:user-management', ['client', 'server']);

  api.use(['useraccounts:unstyled']);
  api.imply(['useraccounts:unstyled']);

  // client
  //api.addFiles(['lib/core.js', 'lib/server.js'], 'server');
  //api.addFiles(['lib/core.js', 'lib/client.js'], 'client');
  //api.addFiles(['lib/umShowUsers.js'],'client');
  //api.addFiles('lib/templates/schema.js', ['client', 'server']);
  api.addFiles(['lib/templates/addUser.html','lib/templates/addUser.js','lib/templates/editUser.html','lib/templates/editUser.js'], 'client');
  api.addFiles(['lib/templates/showUsers.html', 'lib/templates/showUsers.js','lib/templates/showUser.html','lib/templates/showUser.js'], 'client');
  api.addFiles(['lib/templates/userListItem.html','lib/templates/userListItem.js', 'lib/stylesheets/table.css','lib/templates/userSearch.html','lib/templates/userSearch.js'], 'client');
  //api.export('UserManagementTemplates', ['client', 'server']);
  api.addFiles(['lib/templates/addGroup.html','lib/templates/addGroup.js','lib/templates/showGroups.html','lib/templates/showGroups.js'], 'client');
  api.addFiles(['lib/templates/groupListItem.js','lib/templates/groupListItem.html','lib/templates/showGroup.html',
    'lib/templates/showGroup.js','lib/templates/editGroup.js','lib/templates/editGroup.html',
    'lib/templates/manageRoles.html', 'lib/templates/manageRoles.js',
    'lib/templates/addRole.html', 'lib/templates/addRole.js',
    'lib/templates/addGroupRole.html', 'lib/templates/addGroupRole.js'],'client');
});

//Package.onTest(function(api) {
//  api.use('tinytest');
//  api.use('softbricks:user-management');
//  api.addFiles('softbricks:user-management-tests.js');
//});
