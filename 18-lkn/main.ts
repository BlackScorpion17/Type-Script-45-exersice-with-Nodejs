//Making a Array of Countries a Prints its Original Order
let countriesToVisit: String[] = ["Pakistan", "India", "Korea", "Canada"];
console.log("Original Order:",countriesToVisit);

// Print the Array in Alphabetical Order without modifiying the Actual Array List 
console.log("Alphabetical Order:",[...countriesToVisit].sort());

// Show that the array is still in its Original order
console.log("still in Original Order:", countriesToVisit);

// Print a Array in Reversed Order modiying the Actual Array List
console.log("Revers Order:", [...countriesToVisit].reverse());

// Show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);

// We have Changed the Original Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());

// Print the array to show that it's back to it's original order
console.log("Back to Original Order:", countriesToVisit.reverse());

// Print the array to show that it's order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have Changed again the Original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());