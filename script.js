const yes = document.getElementById("yes");
const no = document.getElementById("no");
const text = document.getElementById("text");
const music = document.getElementById("music");

const phrases = [
"Точно? 🥺",
"Подумай ещё ❤️",
"Ну пожалуйста 🙏",
"Я всё равно люблю тебя 💕",
"Нажми «Да» 😘",
"Не получится 🤭",
"ты знаешь правильный ответ ❤️"
];

let count = 0;
let musicStarted = false;
let yesSize = 1;

function startMusic(){
    if(!musicStarted){
        music.play().catch(()=>{});
        musicStarted = true;
    }
}

function moveButton(){

    startMusic();

    count++;

    text.innerHTML = phrases[count % phrases.length];

    yesSize += 0.15;
    yes.style.transform = `scale(${yesSize})`;

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);

    no.style.left = x + "px";
    no.style.top = y + "px";
}

no.onclick = moveButton;
no.onmouseover = moveButton;
no.ontouchstart = moveButton;

yes.onclick = () => {
    startMusic();

    document.body.style.opacity = "0";

    setTimeout(()=>{
        location.href="yes.html";
    },700);
};

document.body.style.transition="1s";

for(let i=0;i<40;i++){

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(3+Math.random()*4)+"s";

    heart.style.animationDelay=Math.random()*5+"s";

    document.body.appendChild(heart);

}
