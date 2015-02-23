Meteor.startup(function() {
    Template.umShowGroups.helpers(UserManagementTemplates.umShowGroupsHelpers);
    Template.umShowGroups.events(UserManagementTemplates.umShowGroupsEvents);
});