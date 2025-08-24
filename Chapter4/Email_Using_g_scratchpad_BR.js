//display BR+CS combo
(function executeRule(current, previous /*null when async*/) {

	g_scratchpad.store_email=current.caller_id.getDisplayValue();

})(current, previous);
