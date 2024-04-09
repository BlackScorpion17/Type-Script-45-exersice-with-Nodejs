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
// sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",would you like to  Dinner with me")); });
// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two Guests to dinner with me.");
// Using while-loop to remove guests from the array untill only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Sending a invitation to the last two guests on the list
console.log("Invitationton to the last 2 guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
