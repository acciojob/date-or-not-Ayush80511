
var isDate = function (input) {
    if (input === null || input === undefined || input === "") {
        return false;
    }

    let date = new Date(input);

    return !isNaN(date.getTime());
};


const input = prompt("Enter Date.");
alert(isDate(input));

