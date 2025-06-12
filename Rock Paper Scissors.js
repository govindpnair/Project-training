let user = prompt("Enter your choice: 1.Rock, 2.paper or 3.scissors");
let compChoice = Math.floor(Math.random()*3)+1;
if (user==compChoice)
    console.log("Its a tie");
else if((user==1 && compChoice==3)||
(user==2 && compChoice==1)||
(user==3 && compChoice==2))
    console.log("You won");
else
    console.log("Computer won");
