
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
function hasEnoughPlayers(team){
if (team.length >= 7) {
    return true;
}    else {
    return false;
}
}

console.log(hasEnoughPlayers(team));