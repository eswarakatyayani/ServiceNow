var datetime=new GlideDateTime();
gs.info(datetime);
gs.info(datetime.getLocalDate().getByFormat('dd-MM-yyyy'));
gs.info(datetime.getLocalTime().getByFormat('HH:mm:ss'));
gs.info(datetime.getYear());
gs.info(datetime.isValid());
gs.info(datetime.compareTo(datetime));
gs.info(datetime.getYearUTC());


/*
*** Script: 2025-08-23 16:41:10
*** Script: 23-08-2025
*** Script: 09:41:10
*** Script: 2025
*** Script: true
*** Script: 0
*** Script: 2025
*/
