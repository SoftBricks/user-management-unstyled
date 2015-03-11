Meteor.startup(function(){
    Template.umAddUserToGroupRole.helpers(UserManagementTemplates.umAddUserToGroupRoleHelpers);
    Template.umAddUserToGroupRole.events(UserManagementTemplates.umAddUserToGroupRoleEvents);
});
