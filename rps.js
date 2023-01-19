//get user choice and store in variable//


let user_choice = prompt("rock (r), paper (p) or scissors (s)");
    user_choice = user_choice.toLowerCase();

function computer_choice() {
    const computer_choices = ["r", "p", "s"];
    const random = Math.floor(Math.random() * 3);
    console.log (computer_choices[random])
}

console.log(user_choice);
computer_choice();


//console.log(user_choice);//
//console.log(computer_choice, choices[computer_choice]);//

