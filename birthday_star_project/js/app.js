// Birthday Star — edit the PUZZLES and PERSONALIZE sections to make it hers.
const PUZZLES = [
  {icon:"🌙", title:"The night sky", question:"I appear when the sun says goodnight. I change my shape, but I'm always above you. What am I?", answers:["A cloud","The moon","A rainbow"], correct:1, hint:"Look up on a clear night.", reward:"The moon has kept the first clue safe. One little step closer to your surprise."},
  {icon:"🌸", title:"A little spring", question:"In Japan, I bloom for a short time and turn the streets pink. What am I?", answers:["Sakura","Sunflower","Lavender"], correct:0, hint:"Think of Japan in springtime.", reward:"A sakura petal drifts into your story. The next clue is waiting."},
  {icon:"⭐", title:"Make a wish", question:"I shine in the night sky, and people make wishes when they see one falling. What am I?", answers:["A planet","A star","A comet"], correct:1, hint:"Twinkle, twinkle...", reward:"You found the final star. Your birthday surprise is ready."}
];

// PERSONALIZE: replace the recipient label and final message when ready.
const screens = [...document.querySelectorAll(".screen")];
const chapterLabel = document.getElementById("chapter-label");
let current = 0;

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  chapterLabel.textContent = id === "welcome" ? "PROLOGUE" : id === "puzzle" ? `CHAPTER 0${current+1}` : id === "finale" ? "THE LAST PAGE" : "A NEW CLUE";
}
function loadPuzzle() {
  const p = PUZZLES[current];
  document.getElementById("puzzle-icon").textContent = p.icon;
  document.getElementById("puzzle-kicker").textContent = `CHAPTER 0${current+1} · A LITTLE CLUE`;
  document.getElementById("puzzle-title").textContent = p.title;
  document.getElementById("puzzle-question").textContent = p.question;
  document.getElementById("progress").textContent = `${current+1} / ${PUZZLES.length}`;
  document.getElementById("feedback").textContent = "";
  const answers = document.getElementById("answers");
  answers.replaceChildren();
  p.answers.forEach((answer,index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => {
      if (index !== p.correct) {
        document.getElementById("feedback").textContent = `Not quite! ${p.hint}`;
        return;
      }
      document.getElementById("interlude-title").textContent = "A clue discovered!";
      document.getElementById("interlude-copy").textContent = p.reward;
      showScreen("interlude");
    });
    answers.append(button);
  });
}
document.getElementById("begin").addEventListener("click", () => {current=0;loadPuzzle();showScreen("puzzle");});
document.getElementById("next-puzzle").addEventListener("click", () => {
  current++;
  if (current < PUZZLES.length) {loadPuzzle();showScreen("puzzle");}
  else showScreen("finale");
});
document.getElementById("reveal-surprise").addEventListener("click", () => {
  document.getElementById("surprise").classList.remove("hidden");
  document.getElementById("restart").classList.remove("hidden");
  document.getElementById("reveal-surprise").classList.add("hidden");
  celebrate();
});
document.getElementById("restart").addEventListener("click", () => {
  current=0;
  document.getElementById("surprise").classList.add("hidden");
  document.getElementById("restart").classList.add("hidden");
  document.getElementById("reveal-surprise").classList.remove("hidden");
  loadPuzzle();showScreen("welcome");
});
function celebrate() {
  const container = document.getElementById("stars");
  for(let i=0;i<34;i++){
    const star=document.createElement("span");
    star.className="star";
    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";
    star.style.width=(2+Math.random()*4)+"px";
    star.style.height=star.style.width;
    star.style.animationDelay=Math.random()*2+"s";
    container.append(star);
    setTimeout(()=>star.remove(),6500);
  }
}
// Decorative star field
const starField=document.getElementById("stars");
for(let i=0;i<65;i++){
  const star=document.createElement("span");
  star.className="star";
  star.style.left=Math.random()*100+"%";
  star.style.top=Math.random()*100+"%";
  star.style.animationDelay=Math.random()*3+"s";
  starField.append(star);
}
