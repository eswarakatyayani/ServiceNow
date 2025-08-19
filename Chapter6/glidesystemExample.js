var name='katy';
gs.info(name,'Name of BS');
gs.log(name,'Name of BS');
gs.error("error",name);
gs.info(gs.getUserDisplayName());
gs.info(gs.getUserID());
gs.info(gs.getUserName());
gs.info(gs.getUser().getEmail());
gs.info(gs.getUser().getDateFormat());
gs.info(gs.getUser().getID());
gs.info(gs.getUser().hasRole('admin'));
gs.info(gs.getUser().isMemberOf("software"));

/*
*** Script: katy
Name of BS: katy
*** Script: error: no thrown error
*** Script: Katya E
*** Script: 6816f79cc0a8016401c5a33be04be441
*** Script: admin
*** Script: eswarakatyayani99@gmail.com
*** Script: yyyy-MM-dd
*** Script: 6816f79cc0a8016401c5a33be04be441
*** Script: true
*** Script: false
*/
