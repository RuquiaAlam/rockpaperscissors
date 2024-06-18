let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const userCh = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");



const generateComputerChoice=()=>
    {
const options=["rock","paper","scissors"];
const  randomIdx=Math.floor(Math.random()*3);
return options[randomIdx];

    }
const playGame = (userChoice) => {

    console.log("user choice", userChoice);
    //Generate computer choice
const drawGame=()=>
    {
        console.log("Game was draw");
           userCh.innerText = "Game draw !Play again";
              msg.style.backgroundColor = "#081b31";
    }

    const showWinner=(userWin,userChoice,compChoice)=>
        {
if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;;
        console.log("You Win!");
        userCh.innerText = `You Win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{

        computerScore++;
        comspScorePara.innerText = computerScore;
        console.log("You lose!");
        userCh.innerText = `You lose ${compChoice} beats your ${userChoice}`;
           msg.style.backgroundColor = "red";

    }

        }

const compChoice=generateComputerChoice();
console.log("computer choice", compChoice);
if(userChoice===compChoice)
    {
        //Draw condition
drawGame();


    }

    else{
        let userWin=true;


        if(userChoice==="rock")
            {
                userWin=compChoice==="paper"? false:true;
            }
            else if(userChoice==="paper")
                {
                    userWin=compChoice==="scissors"?false:true;
                }
                else if(userChoice==="scissors")
                    {
                        userWin=compChoice==="rock"?false:true;
                    }
                     showWinner(userWin,userChoice,compChoice);
    }
  


};
choices.forEach((choice)=>
    {
choice.addEventListener("click",()=>
{

  

    const userChoice=choice.getAttribute("id");
    console.log("choice was clicked",userChoice)
    playGame(userChoice);
})
    })
