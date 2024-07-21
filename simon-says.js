let gameseq = [];
let userseq = [];
let level = 0;
let start = false;

let highsc = document.querySelector("h2");
let hi = 0;

let colors = ["red","orange","teal","violet"];
document.addEventListener("keypress",()=>{
    if(start == false){
        console.log("game started");
        start = true;

        levelUp();
    }
});

function btnFlash(b){
    b.classList.add("flash");
    setTimeout(()=>{
        b.classList.remove("flash");
    },200)
}

function levelUp(){
    userseq=[];
    level++;
    let h3 = document.querySelector("h3");
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randCol = colors[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    // console.log(randIdx);
    // console.log(randCol);
    // console.log(randBtn);
    gameseq.push(randCol);
    console.log(gameseq);
    btnFlash(randBtn);
}

function userFlash(b){
    b.classList.add("userflash");
    setTimeout(()=>{
        b.classList.remove("userflash");
    },200)
}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
            if(hi<level){
                hi++;
                highsc.innerText=`HighScore: ${hi}`;
            }
        }
    }
    else{
        let h3 = document.querySelector("h3");
        h3.innerHTML=`<b>Game Over!<b> Your score was ${level-1} <br> Press any key to play Again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }
}
function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn)
    let userCol = btn.getAttribute("id");
    userseq.push(userCol);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start = false;
    gameseq =[];
    userseq=[];
    level = 0;
}
