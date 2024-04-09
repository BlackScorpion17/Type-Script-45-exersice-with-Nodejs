let guestList = ["Usama", "Rayan", "Khurram", "Asad"];

let dontCome = guestList[0];

console.log(dontCome, "nahi aa sakta");

guestList.splice(0, 1, "Sijawal");

guestList.forEach(guest => console.log(`Salam ${guest}, would u to Dinner with me?`));
