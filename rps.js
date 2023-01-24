// establish user_choice as blank, then get user_choice from buttons //

//needs to be made into a loop that starts with click on button//

let user_choice=""

function user_rock() {
    user_choice += "r";
}

function user_paper() {
    user_choice += "p";
}
function user_scissors() {
    user_choice += "s";
}



/*get user choice and store in variable

let user_choice = prompt("r p or s?")
    user_choice = user_choice.toLowerCase();

*/

function game() {
    let computer_choices = ["r", "p", "s"];
    let random = Math.floor(Math.random() * 3);
    //console.log(user_choice);//
    //console.log(computer_choices[random])//
    if  (user_choice === computer_choices[random]) { 
        console.log("tie"); }
    else if (user_choice === "r" && computer_choices[random] === "p") {
        console.log("computer chose paper. you lose");
    } else if (user_choice ==="r" && computer_choices[random] === "s") {
        console.log("computer chose scissors. you win.");
    } else if (user_choice === "p" && computer_choices[random] === "r") {
        console.log("computer chose rock. you win");
    } else if (user_choice === "p" && computer_choices[random] === "s") {
        console.log("computer chose scissors. you lose");
    } else if (user_choice === "s" && computer_choices[random] === "r") {
        console.log("computer chose rock. you lose");
    } else if (user_choice === "s" && computer_choices[random] === "p") {
        console.log("computer chose paper. you win");
    }
      else {
        console.log("not a tie");
    }
}

//game()//

console.log(user_choice)


//console.log(user_choice);//
//console.log(computer_choice, choices[computer_choice]);//

