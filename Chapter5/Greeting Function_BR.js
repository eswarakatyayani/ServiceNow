(function executeRule(current, previous /*null when async*/) {
  var id=current.sys_id;
	var name= gs.getUserDisplayName();
	var user= gs.getUserID();
	GreetingFunction_SI(id,name,user);

})(current, previous);
