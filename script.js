const yes = document.getElementById("yes");
const no = document.getElementById("no");
const text = document.getElementById("question");
const music = document.getElementById("music");

const phrases = [
"Ты точно уверена? 🥺",
"Подумай ещё 💕",
"Нееет 😭",
"Я всё равно тебя люблю ❤️",
"Ну пожалуйста 🥹",
"Правильный ответ — Да 😘",
"Попробуй ещё 🤭"
];

let tries = 0;
let yesScale = 1;
let started = false;

function startMusic(){
    if(!started){
        music.play().catch(()=>{});
        started = true;
    }
}

function moveButton(){

    startMusic();

    tries++;

    text.textContent = phrases[tries % phrases.length];

    yesScale += 0.08;
    yes.style.transform = `scale(${yesScale})`;

    const padding = 20;

    const maxX = window.innerWidth - no.offsetWidth - padding;
    const maxY = window.innerHeight - no.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    no.style.position = "fixed";
    no.style.left = x + "px";
    no.style.top = y + "px";
    no.style.transition = "left .25s ease, top .25s ease";
}

no.addEventListener("click", moveButton);
no.addEventListener("mouseenter", moveButton);
no.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveButton();
});

yes.addEventListener("click", ()=>{

    startMusic();

    document.body.style.transition="opacity .6s";
    document.body.style.opacity="0";

    setTimeout(()=>{
        location.href="yes.html";
    },600);

});

for(let i=0;i<35;i++){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(6+Math.random()*6)+"s";

    heart.style.animationDelay=Math.random()*6+"s";

    document.body.appendChild(heart);

}
