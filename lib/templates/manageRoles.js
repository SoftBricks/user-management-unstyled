Meteor.startup(function(){
    Template.umManageRoles.helpers(UserManagementTemplates.umManageRolesHelper);
    //Template.umManageRoles.events(UserManagementTemplates.umManageRolesEvents);
});
