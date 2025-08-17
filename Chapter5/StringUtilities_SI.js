var StringUtilities_SI = Class.create();
StringUtilities_SI.prototype = {
    initialize: function() {
    },

    // Convert string to uppercase, function 1
    toUpperCase: function(str) {
        if (!str)
            return "";
        return str.toUpperCase();
    },

    // Reverse a string, function 2
    reverse: function(str) {
        if (!str)
            return "";
        return str.split("").reverse().join("");
    },

    type: 'StringUtilities_SI'
};
