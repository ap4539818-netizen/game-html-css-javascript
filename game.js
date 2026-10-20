let userScore =0;
let compScore=0;

const choices =document.querySelectorAll(".choice div");
const msg1 = document.querySelector("#msg1");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompchoice = ()=>{
    const options =["rock","paper","scissors"];
    // isme ek math naam  ki class hoti hai jisme ek random naam hai method hota hai iska use karke hmm log computer ko ek random yaa toh stone paper scissor main se koi ek selete karega 
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg1.innerText = "GAME WAS DRAW SO PLAY IT AGAIN !!!"
};

const showWinner = (userWin , userChoice ,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText= userScore;
        msg1.innerText = ` GREAT YOU WIN !! YOUR${userChoice} BEATS ${compChoice}`;
        msg1.computedStyleMap.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg1.innerText = `OOH  YOU LOSE !! ${compChoice} BEATS YOUR ${userChoice}`;
        msg1.style.backgroundColor = "red";
    }
}

const playGame =(userChoice)=>{
    console.log("user choice = ", userChoice);
    //GENERATE COMPUTER CHOICE -> MODULAR
    const compChoice =genCompchoice();
    console.log("comp choice =",compChoice);

if (userChoice === compChoice) {
    //draw game
    drawGame();
}else {
    let userWin = true;
    // isme userchoice rock hai toh user jo hai woh userwin kaise hota kyuki userchoice rock hai aur compchoice paper toh rock aur paper main paper jit rha hai toh compchoice win toh userchoice haar rha toh false pahle hai aur true jo hai jbb user aur comp ne rock aur paper le hi liya toh bacha kya scissors toh scissors jo aur usme userchoice rock hai toh compchoice scissors haaar rha aur user jit rha toh isliye true hai 
    if (userChoice === "rock"){
        //scissors,paper
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
        //rock , scissors
        userWin =compChoice === "scissors" ? false : true;

    } else {
        //rock,paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin , userChoice , compChoice);

}
};
choices.forEach((choice)=>{
    console.log( choice);
    choice.addEventListener("click",()=>{
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
        
    });
});
