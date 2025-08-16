(function executeRule(current, previous /*null when async*/) {

  var grChildIncident= new GlideRecord("incident_task");
  // to insert new record no need to query and fetch next
  
	grChildIncident.initiate(); //create new record
	grChildIncident.incident=current.sys_id; // map the primary keys
  grChildIncident.assignment_group=current.assignment_group; // assign
	grChildIncident.short_description=current.short_description; //assign
	grChildIncident.insert(); // insert
	
})(current, previous);
