// Creating a Guest List Array
var guestList = ["Usama", "Asad", "Rayan", "Aimal"];
// Making variable for those guest whon can't come
var dontCome = guestList[0];
// Print the name of guest who can't come
console.log(dontCome, "Nahi aa sakte hain");
// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "sijawal");
// Message print Bigger Table 
console.log("Good News ! We have Found a Bigger Table For Dinner.");
//Adding a new guest at starting index of array
guestList.unshift("Muneeb");
// Adding a new guest at ending index of array
guestList.push("Shamraiz");
// Get a middle index of our guest list aaray
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Hazim");
// Print Message of Updated List
console.log("Updated List of ourGuests");
// sedding a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",would you like to  Dinner with me")); });
