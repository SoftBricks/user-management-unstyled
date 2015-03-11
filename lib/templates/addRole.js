Meteor.startup(function(){
    Template.umAddRole.helpers(UserManagementTemplates.umAddRoleHelper);
    //Template.umManageRoles.events(UserManagementTemplates.umManageRolesEvents);
});
