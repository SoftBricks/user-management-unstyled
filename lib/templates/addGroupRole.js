Meteor.startup(function(){
    Template.umAddGroupRole.helpers(UserManagementTemplates.umAddGroupRoleHelper);
    Template.umAddGroupRole.events(UserManagementTemplates.umAddGroupRoleEvents);
});
