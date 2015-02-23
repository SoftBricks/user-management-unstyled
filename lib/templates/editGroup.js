Meteor.startup(function(){
    Template.umEditGroup.helpers(UserManagementTemplates.umEditGroupHelpers);
    Template.umEditGroup.events(UserManagementTemplates.umEditGroupEvents);
});
