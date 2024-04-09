// Creating a Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// Using For loop
for( let oneNumber of numbers){
    let ordianalEnding: string;

    if(oneNumber === 1){
        ordianalEnding = "st"
    }
    else if(oneNumber === 2){
        ordianalEnding ="nd"
    }
    else if(oneNumber === 3){
        ordianalEnding = "rd"
    }
    else{
        ordianalEnding ="th"
    }

    console.log(`${oneNumber}${ordianalEnding}`);
}