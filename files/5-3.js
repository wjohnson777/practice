
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(row){
    var lineString = '';
    for(var i=1; i<=row; i++){
        lineString += makeLine(i);
}
    return lineString;
}

console.log(buildTriangle(10));
