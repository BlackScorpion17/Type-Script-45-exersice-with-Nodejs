// Making a Function
function make_shirt (size: string = "Large", printMessege: string = "I Love TypeScript"){
     console.log(`Creating a ${size} shirt with the ${printMessege} prints on shirt`)
}

// Calling a Function with by-default values
make_shirt();

// Calling a Function now with Medium size and default messege
make_shirt("Medium")

// Calling a Function now with Small size and also Different Print Messege
make_shirt("Small", "I Love JavaScipt")