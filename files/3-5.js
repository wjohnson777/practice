
var balance = 350.00;
var checkBalance = true;
var isActive = true;

if (checkBalance === false) {
    console.log("Thank you. Have a nice day!");
} else if (checkBalance === true && isActive === false) {
    console.log("Your account is no longer active.");
} else if (checkBalance === true && isActive === true && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if (checkBalance === true && isActive === true && balance === 0) {
    console.log("Your account is empty.");
} else if (checkBalance === true && isActive === true && balance < "0") {
    console.log("Your balance is negative. Please contact bank.");
}