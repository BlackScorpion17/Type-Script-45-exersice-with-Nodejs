var guestList = ["Usama", "Rayan", "Khurram", "Asad"];
var dontCome = guestList[0];
console.log(dontCome, "nahi aa sakta");
guestList.splice(0, 1, "Sijawal");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would u to Dinner with me?")); });
