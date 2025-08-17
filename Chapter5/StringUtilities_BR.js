//Using class Based Script includes
(function executeRule(current, previous /*null when async*/) {

    var utils = new StringUtilities_SI(); // created single object 

    var str = current.description;
    var uppercase = utils.toUpperCase(str); //using here
    current.description = uppercase;

    var str2 = current.short_description;
    var reversing = utils.reverse(str2); // and here
    current.short_description = reversing;

})(current, previous);
