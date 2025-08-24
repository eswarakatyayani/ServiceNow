// g_form and g_user are only executed in clinet scripts not from Background scripts.

function onload()
{
g_form.addInfoMessage('This is a info message');
g_form.addErrorMessage('This is an Error message');
g_form.addFormMessage('This is a warning message','warning');
var test= g_form.getValue('category');
g_form.addInfoMessage(test);
var id= g_form.getValue('caller_id');
g_form.addInfoMessage(id);
var test= g_form.getDisplayBox('caller_id').value;
g_form.addInfoMessage(test);
if(test=="Abel Tuter")
{
g_form.addOption('category','tech_issue','Tech issue');
g_form.removeOption('category','software');
g_form.clearOptions('category');
g_form.disableAttachments();
g_form.setMandatory('cmdb_ci',true);
g_form.setDisplay('business_service',false);
g_form.setReadOnly('service_offering',true);
g_form.setLabelOf('description','details');
g_form.hideRelatedList('task_sla');
g_form.hideRelatedLists();

}
}





function onload()
{
g_form.addInfoMessage(g_user.firstName);
g_form.addInfoMessage(g_user.lastName);
g_form.addInfoMessage(g_user.userID);
g_form.addInfoMessage(g_user.userName);
g_form.addInfoMessage(g_user.getFullName());
g_form.setReadOnly('description',true);
if(g_user.hasRole('admin'))
{
g_form.setReadOnly('description',false);
}
if(g_user.hasRole('itil'))
{
g_form.setReadOnly('type',false);
}
if(g_user.hasRoleFromList('itil,admin,security_admin'))
{
g_form.setReadOnly('type',false);
}
if(g_user.hasRoles())
{
g_form.setReadOnly('type',false);
}
}

