// establish user_choice as blank, then get user_choice from buttons //

//needs to be made into a loop that starts with click on button//

var user_choice=""

function user_rock() {
    user_choice += "r";
    game();
}

function user_paper() {
    user_choice += "p";
    game(); 
}
function user_scissors() {
    user_choice += "s";
    game()
}




/*get user choice and store in variable

let user_choice = prompt("r p or s?")
    user_choice = user_choice.toLowerCase();

*/

function game() {
    var computer_choices = ["r", "p", "s"];
    var random = Math.floor(Math.random() * 3);
    //console.log(user_choice);//
    //console.log(computer_choices[random])//
    if  (user_choice === computer_choices[random]) { 
        console.log("tie");
        user_choice="";
    }
    else if (user_choice === "r" && computer_choices[random] === "p") {
        console.log("computer chose paper. you lose");
        user_choice="";
    } else if (user_choice ==="r" && computer_choices[random] === "s") {
        console.log("computer chose scissors. you win.");
        user_choice="";
    } else if (user_choice === "p" && computer_choices[random] === "r") {
        console.log("computer chose rock. you win");
        user_choice="";
    } else if (user_choice === "p" && computer_choices[random] === "s") {
        console.log("computer chose scissors. you lose");
        user_choice="";
    } else if (user_choice === "s" && computer_choices[random] === "r") {
        console.log("computer chose rock. you lose");
        user_choice="";
    } else if (user_choice === "s" && computer_choices[random] === "p") {
        console.log("computer chose paper. you win");
        user_choice="";
    }
      else {
        console.log("not a tie");
        user_choice="";
    }
}

//game()//



//console.log(user_choice);//
//console.log(computer_choice, choices[computer_choice]);//

