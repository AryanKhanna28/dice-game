let roll =document.getElementById("rollDice");
let game =document.getElementById("newGame");
let stop =document.getElementById("hold");
let score00=document.querySelector(".score0");
let score01=document.querySelector(".score1");
let currentScore00=document.querySelector(".currentScore0");
let currentScore01=document.querySelector(".currentScore1");
let diceImg=document.querySelector(".image");
let Name0=document.getElementById(".player0");
let Name1=document.getElementById(".player1");
let div0=document.getElementById("box0");
let div1=document.getElementById("box1");
// console.log(div0,div1);
// console.log(div0.cla);


score00.textContent=0;
score01.textContent=0;
diceImg.classList.add("hidden");


let scoress=[0,0];
let activePlayer=0;
let latestScore=0;

let playGame=true;

roll.addEventListener("click",function(){
   if(playGame){
    diceImg.classList.remove("hidden");

    let randomnumber = Math.trunc(Math.random() * 6) + 1;
    //console.log(randomnumber)

    //show images
    diceImg.src=`dice-${randomnumber}.png`;

    //check for rolles 1
    if(randomnumber !==1){
        latestScore=latestScore+randomnumber;
        //currentScore00.textContent=latestScore;
        document.querySelector(`.currentScore${activePlayer}`).textContent= latestScore;
    }
    else{

    //switch the player
        document.querySelector(`.currentScore${activePlayer}`).textContent=0;  

        activePlayer=activePlayer=== 0 ? 1 : 0;
        latestScore=0;

        // document.querySelector("#box1").style.backgroundColor="rgb(135, 135, 196)";

        // document.querySelector("#box2").style.backgroundColor="rgb(176, 194, 211)";
        // console.log("Before color swap", div0.style.backgroundColor, div1.style.backgroundColor);

        // const tempColor = div0.style.backgroundColor;

        // div0.style.backgroundColor = div1.style.backgroundColor;

        // div1.style.backgroundColor = tempColor;

        // div0.style.backgroundColor = getComputedStyle(div1).backgroundColor;
        // div1.style.backgroundColor = getComputedStyle(div0).backgroundColor;

      //   div0.classList.toggle("changeBackground0");
        div0.classList.toggle("changeBackground1");
      //   div1.classList.toggle("changeBackground0");
        div1.classList.toggle("changeBackground1");



    }
   }

});

stop.addEventListener("click",function(){
   if(playGame){
     // console.log("working");

     scoress[activePlayer] += latestScore;
     //console.log(scoress);
     document.querySelector(`.score${activePlayer}`).textContent=scoress[activePlayer];
 
     if(scoress[activePlayer]>=20){

        playGame=false;  
        
         document.querySelector(`#box${activePlayer}`).classList.add("playerWinner");
         
        //  document.querySelector(`#box${activePlayer}`).classList.add("playerActive");
 
         diceImg.classList.add("hidden");
 
 
     }
     else{
         //switch player

         document.querySelector(`.currentScore${activePlayer}`).textContent=0;  

        activePlayer=activePlayer=== 0 ? 1 : 0;
        latestScore=0;

      //   div0.classList.toggle("changeBackground0");
        div0.classList.toggle("changeBackground1");
      //   div1.classList.toggle("changeBackground0");
        div1.classList.toggle("changeBackground1");
     }
   }
})

 game.addEventListener( "click", function(){
    score00.textContent=0;
    score01.textContent=0;
    diceImg.classList.add("hidden");


     scoress=[0,0];
     activePlayer=0;
     latestScore=0;

    playGame=true;

    div0.classList.remove("playerWinner");
    div1.classList.remove("playerWinner");

    currentScore00.textContent=0;
    currentScore01.textContent=0;

   //  div0.classList.toggle("changeBackground0");
   //  div0.classList.toggle("changeBackground1");
   //  div1.classList.toggle("changeBackground0");
   //  div1.classList.toggle("changeBackground1");

    //some error
 })



































// let currentPlayer=true;


// do {
//     if(currentPlayer){

//         let latestScore=0;
//         function rollingDice(){
//             let randomnumber = Math.trunc(Math.random() * 6) + 1;

//             if(randomnumber==2){
//                 diceImg.src = `dice-${randomnumber}.png`;
//                 latestScore=latestScore+randomnumber;
//                 currentScore00.textContent=latestScore;
//             } 
//             else if(randomnumber==3){
//                 diceImg.src = `dice-${randomnumber}.png`;
//                 latestScore=latestScore+randomnumber;
//                 currentScore00.textContent=latestScore;
//             }
//             else if(randomnumber==4){
//                 diceImg.src = `dice-${randomnumber}.png`;
//                 latestScore=latestScore+randomnumber;
//                 currentScore00.textContent=latestScore;
//             } 
//             else if(randomnumber==5){   
//                 diceImg.src = `dice-${randomnumber}.png`;
//                latestScore=latestScore+randomnumber;
//                 currentScore00.textContent=latestScore;
//             } 
//             else if(randomnumber==6){
//                 diceImg.src = `dice-${randomnumber}.png`;
//                 latestScore=latestScore+randomnumber;
//                 currentScore00.textContent=latestScore;
//             }   
//             else {
//                 diceImg.src = `dice-${randomnumber}.png`;
                
//                 document.querySelector("#box1").style.backgroundColor="rgb(135, 135, 196)";
//                 document.querySelector("#box2").style.backgroundColor="rgb(176, 194, 211)";
    
//                 currentScore00.textContent=0;
                
                
        
        
//             }
           
            
        
//         }
//         break;
//         currentPlayer=false;
        
//     }
//     else{
//         let latestScore=0;
//         function rollingDice(){
//             let randomnumber = Math.trunc(Math.random() * 6) + 1;

//             if(randomnumber==2){
//                 diceImg.src = `dice-${randomnumber}.png`;
//                 latestScore=latestScore+randomnumber;
//                 currentScore01.textContent=latestScore;
//             } 
//             else if(randomnumber==3){
//                 diceImg.src = `dice-${randomnumber}.png`;
//                 latestScore=latestScore+randomnumber;
//                 currentScore01.textContent=latestScore;
//             }
//             else if(randomnumber==4){
//                 diceImg.src = `dice-${randomnumber}.png`;
//                 latestScore=latestScore+randomnumber;
//                 currentScore01.textContent=latestScore;
//             } 
//             else if(randomnumber==5){   
//                 diceImg.src = `dice-${randomnumber}.png`;
//                latestScore=latestScore+randomnumber;
//                 currentScore01.textContent=latestScore;
//             } 
//             else if(randomnumber==6){
//                 diceImg.src = `dice-${randomnumber}.png`;
//                 latestScore=latestScore+randomnumber;
//                 currentScore01.textContent=latestScore;
//             }   
//             else {
//                 diceImg.src = `dice-${randomnumber}.png`;
                
//                 document.querySelector("#box1").style.backgroundColor="rgb(135, 135, 196)";
//                 document.querySelector("#box2").style.backgroundColor="rgb(176, 194, 211)";
    
//                 currentScore01.textContent=0;
                
                
        
        
//             }
            

//     }
//     break;
//     }
// }
  
//   while (randomnumber == 1);
















// roll.addEventListener("click",rollingDice);
