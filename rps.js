// establish user_choice as blank, then get user_choice from buttons //

//needs to be made into a loop that starts with click on button//

var user_choice= ""

var p_score = 0
var c_score = 0

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

function game() {
    var computer_choices = ["r", "p", "s"];
    var random = Math.floor(Math.random() * 3);
    //console.log(user_choice);//
    //console.log(computer_choices[random])//
    if  (user_choice === computer_choices[random]) { 
        document.getElementById("result").innerHTML = "tie";
        p_score += 0;
        c_score += 0;
        user_choice="";
    }
    else if (user_choice === "r" && computer_choices[random] === "p") {
        document.getElementById("result").innerHTML = "computer chose paper. you lose";
        p_score += 0;
        c_score += 1;
        user_choice="";
    } 
    else if (user_choice ==="r" && computer_choices[random] === "s") {
        document.getElementById("result").innerHTML = "computer chose scissors. you win.";
        p_score += 1;
        c_score += 0;
        user_choice="";
    } 
    else if (user_choice === "p" && computer_choices[random] === "r") {
        document.getElementById("result").innerHTML = "computer chose rock. you win.";
        p_score += 1;
        c_score += 0;
        user_choice="";
    } 
    else if (user_choice === "p" && computer_choices[random] === "s") {
        document.getElementById("result").innerHTML = "computer chose scissors. you lose.";
        p_score += 0;
        c_score += 1;
        user_choice="";
    } 
    else if (user_choice === "s" && computer_choices[random] === "r") {
        document.getElementById("result").innerHTML = "computer chose rock. you lose.";
        p_score += 0;
        c_score += 1;
        user_choice="";
    } 
    else if (user_choice === "s" && computer_choices[random] === "p") {
        document.getElementById("result").innerHTML = "computer chose paper. you win.";
        p_score += 1;
        c_score += 0;
        user_choice="";
    }
      else {
        document.getElementById("result").innerHTML = "error";

        user_choice="";
    }
}

