(function executeRule(current, previous /*null when async*/) {

if((previous.state=="6"|| previous.state=="7") && 
current.state.changes() && current.state != "6" &&
current.state != "7")
{
	current.reopen_count=previous.reopen_count + 1;
}
})(current, previous);
