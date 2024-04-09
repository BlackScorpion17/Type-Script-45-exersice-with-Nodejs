// Define a Function to print each magician name from an array
function show_magician(magicians: string[]){
   magicians.forEach(name => console.log(name));
}

// Define an array containing magicians name
let magician_names = ["Tommy Cooper", "Paul Daniels", "David Blanie"]

// Call the Function to print  each magician name
show_magician(magician_names);