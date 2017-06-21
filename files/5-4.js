
var laugh = function(num) {
    var message = "";
    for(var x = 1; x <= num; x ++) {
        message += "ha";
    }
    return message + "!";
};

console.log(laugh(10));