// Creating a Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// Using For loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordianalEnding = void 0;
    if (oneNumber === 1) {
        ordianalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordianalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordianalEnding = "rd";
    }
    else {
        ordianalEnding = "th";
    }
    console.log("".concat(oneNumber).concat(ordianalEnding));
}
