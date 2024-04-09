// Define a Function to print each magician name from an array
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an array containing magicians name
var magician_names = ["Tommy Cooper", "Paul Daniels", "David Blanie"];
// Call the Function to print  each magician name
show_magician(magician_names);
