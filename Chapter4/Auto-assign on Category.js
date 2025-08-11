// Auto-assign on Category: Write a Business Rule that automatically assigns the incident to the "VPN" assignment group when the Category is "Network".

(function executeRule(current, previous) {
   if (current.category == "network") {  //category and network are backend names
   // For using setDisplayValue we can use either backend name or sys_id of the name.
   current.assignment_group.setDisplayValue("softWare"); // lookup field case insensitive
   current.subcategory.setDisplayValue("vpn"); //choice field case sensitive
 // current.description.setDisplayValue("Working on BR"); // text field, can use any
  current.description.setDisplayValue("Working on BR by: "+ current.caller_id.getDisplayValue()); // text field, can use any 
   current.business_service.setDisplayValue("clIent seRviCes"); // lookup field case insensitive
 //  current.cmdb_ci="Adobe Download Manager";  // doesnot work
   }
})(current, previous);


// For choice fields → setDisplayValue() is case-sensitive because it matches exactly against the label in the sys_choice table.

// For reference fields → setDisplayValue() is case-insensitive because it runs a query on the target table’s display column.
