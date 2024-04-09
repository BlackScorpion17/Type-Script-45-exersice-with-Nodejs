// Define a Function to print each magician name from an array
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array containing magicians name
var magician_names = ["Tommy Cooper", "Paul Daniels", "David Blanie"];
// Call the Function to print  each magician name
var great_magician = make_great(magician_names);
show_magician(great_magician);
