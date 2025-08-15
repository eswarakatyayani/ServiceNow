(function executeRule(current, previous) {
if(current.state=="8")
{
	return; //like cancel anyone can do
}
var isMember=false;
if(current.assigned_to.changes() && current.assignment_group) // if assignment grp is present and assigned to changes
{
var gruser =new GlideRecord("sys_user_grmember"); //get record of user member table
gruser.addQuery('group', current.assignment_group); //the first argument is the field name of Gilderecord, the second the value
gruser.query();
while(gruser.next())   // use while to iterate
{
	if(gruser.user==gs.getUserID())  //gildesystem will give the user working on the incident.
	{
		isMember=true;
		break; // if condition satisies for one then break
	}
}	
}
if(isMember==false && current.assigned_to.changes())
{
gs.addErrorMessage("User must be part of the assignment group");  //gildesystem to pop up message
current.assigned_to = previous.assigned_to; // revert from new value to old 
current.setAbortAction(true);
}
})(current, previous);
