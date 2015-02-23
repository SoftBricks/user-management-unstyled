Meteor.startup(function() {
    Template.groupListItem.helpers(UserManagementTemplates.umGroupListItemHelper);
    Template.groupListItem.events(UserManagementTemplates.umGroupListItemEvents);
});