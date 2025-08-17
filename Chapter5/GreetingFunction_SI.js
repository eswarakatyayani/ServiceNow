function GreetingFunction_SI(id,name,user)
{
	var gr_incident= new GlideRecord("incident");
	gs.log("id: ",id);
	gs.log("user: ",user);
	gr_incident.addQuery('sys_id',id);
	gr_incident.query();
	if(gr_incident.next())
	{
		gr_incident.description= "Hello "+ name+ ": "+user+" you created new incident ";
		gr_incident.update();  // this is necessary because there is this is not returning anything. So directly update.
	}
}
