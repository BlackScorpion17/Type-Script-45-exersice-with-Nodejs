// Creating a Function with Parameters which Return a Value in String
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
// Calling a Function and Print the Returned Value
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Berlin", "Germany"));