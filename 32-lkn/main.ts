// Array Of Current Users
let current_users = ["Sijawal", "Muneeb", "Moosa", "Abdullah", "ali"]

// Array of New Users
let new_users = ["Umair", "Khuzaim", "Sijawal", "Hadi", "Ali"]

// Loop Through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {

    // Making a Condition for username already exist ans save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase())

   // Print Different message using If_else statements 
if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`this Username ${new_one_user} is available`)
    }
})