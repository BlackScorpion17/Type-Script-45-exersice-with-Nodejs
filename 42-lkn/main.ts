// Define a Function to print each magician name from an array
function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
 }

// Function to make magicians grat through .map() it will modify array
 function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
 }
  
 // Define an array containing magicians name
 let magician_names = ["Tommy Cooper", "Paul Daniels", "David Blanie"];
 
 // Call make_great function to modify magicians names
let great_magician = make_great(magician_names);

// Call show_magicians that show modified list of magitions
show_magician(great_magician);