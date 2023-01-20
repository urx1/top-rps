//get user choice and store in variable//


let user_choice = prompt("r p or s?")
    user_choice = user_choice.toLowerCase();



function game() {
    let computer_choices = ["r", "p", "s"];
    let random = Math.floor(Math.random() * 3);
    //console.log(user_choice);//
    //console.log(computer_choices[random])//
    if  (user_choice === computer_choices[random]) { 
        console.log("tie");
    }   else {
        console.log("not a tie");
    }
}

game()




//console.log(user_choice);//
//console.log(computer_choice, choices[computer_choice]);//

