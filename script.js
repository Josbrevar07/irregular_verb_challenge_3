// === Verb Data ===
const verbs = [
  { infinitive: "arise", forms: ["arose", "arisen", "arising", "arises"] },
  { infinitive: "awake", forms: ["awoke", "awoken", "awaking", "awakes"] },
  { infinitive: "be", forms: ["was/were", "been", "being", "is"] },
  { infinitive: "bear", forms: ["bore", "born", "bearing", "bears"] },
  { infinitive: "beat", forms: ["beat", "beaten", "beating", "beats"] },
  { infinitive: "become", forms: ["became", "become", "becoming", "becomes"] },
  { infinitive: "begin", forms: ["began", "begun", "beginning", "begins"] },
  { infinitive: "behold", forms: ["beheld", "beheld", "beholding", "beholds"] },
  { infinitive: "bend", forms: ["bent", "bent", "bending", "bends"] },
  { infinitive: "bet", forms: ["bet", "bet", "betting", "bets"] },
  { infinitive: "bind", forms: ["bound", "bound", "binding", "binds"] },
  { infinitive: "bite", forms: ["bit", "bitten", "biting", "bites"] },
  { infinitive: "bleed", forms: ["bled", "bled", "bleeding", "bleeds"] },
  { infinitive: "blow", forms: ["blew", "blown", "blowing", "blows"] },
  { infinitive: "break", forms: ["broke", "broken", "breaking", "breaks"] },
  { infinitive: "bring", forms: ["brought", "brought", "bringing", "brings"] },
  { infinitive: "build", forms: ["built", "built", "building", "builds"] },
  { infinitive: "burn", forms: ["burnt", "burnt", "burning", "burns"] },
  { infinitive: "burst", forms: ["burst", "burst", "bursting", "bursts"] },
  { infinitive: "buy", forms: ["bought", "bought", "buying", "buys"] },
  { infinitive: "cast", forms: ["cast", "cast", "casting", "casts"] },
  { infinitive: "catch", forms: ["caught", "caught", "catching", "catches"] },
  { infinitive: "choose", forms: ["chose", "chosen", "choosing", "chooses"] },
  { infinitive: "come", forms: ["came", "come", "coming", "comes"] },
  { infinitive: "cost", forms: ["cost", "cost", "costing", "costs"] },
  { infinitive: "creep", forms: ["crept", "crept", "creeping", "creeps"] },
  { infinitive: "cut", forms: ["cut", "cut", "cutting", "cuts"] },
  { infinitive: "deal", forms: ["dealt", "dealt", "dealing", "deals"] },
  { infinitive: "dig", forms: ["dug", "dug", "digging", "digs"] },
  { infinitive: "do", forms: ["did", "done", "doing", "does"] },
  { infinitive: "draw", forms: ["drew", "drawn", "drawing", "draws"] },
  { infinitive: "dream", forms: ["dreamt", "dreamt", "dreaming", "dreams"] },
  { infinitive: "drink", forms: ["drank", "drunk", "drinking", "drinks"] },
  { infinitive: "drive", forms: ["drove", "driven", "driving", "drives"] },
  { infinitive: "eat", forms: ["ate", "eaten", "eating", "eats"] },
  { infinitive: "fall", forms: ["fell", "fallen", "falling", "falls"] },
  { infinitive: "feed", forms: ["fed", "fed", "feeding", "feeds"] },
  { infinitive: "feel", forms: ["felt", "felt", "feeling", "feels"] },
  { infinitive: "fight", forms: ["fought", "fought", "fighting", "fights"] },
  { infinitive: "find", forms: ["found", "found", "finding", "finds"] },
  { infinitive: "fly", forms: ["flew", "flown", "flying", "flies"] },
  { infinitive: "forget", forms: ["forgot", "forgotten", "forgetting", "forgets"] },
  { infinitive: "forgive", forms: ["forgave", "forgiven", "forgiving", "forgives"] },
  { infinitive: "freeze", forms: ["froze", "frozen", "freezing", "freezes"] },
  { infinitive: "get", forms: ["got", "gotten", "getting", "gets"] },
  { infinitive: "give", forms: ["gave", "given", "giving", "gives"] },
  { infinitive: "go", forms: ["went", "gone", "going", "goes"] },
  { infinitive: "grow", forms: ["grew", "grown", "growing", "grows"] },
  { infinitive: "hang", forms: ["hung", "hung", "hanging", "hangs"] },
  { infinitive: "have", forms: ["had", "had", "having", "has"] },
  { infinitive: "hear", forms: ["heard", "heard", "hearing", "hears"] },
  { infinitive: "hide", forms: ["hid", "hidden", "hiding", "hides"] },
  { infinitive: "hit", forms: ["hit", "hit", "hitting", "hits"] },
  { infinitive: "hold", forms: ["held", "held", "holding", "holds"] },
  { infinitive: "hurt", forms: ["hurt", "hurt", "hurting", "hurts"] },
  { infinitive: "keep", forms: ["kept", "kept", "keeping", "keeps"] },
  { infinitive: "know", forms: ["knew", "known", "knowing", "knows"] },
  { infinitive: "lay", forms: ["laid", "laid", "laying", "lays"] },
  { infinitive: "lead", forms: ["led", "led", "leading", "leads"] },
  { infinitive: "leave", forms: ["left", "left", "leaving", "leaves"] },
  { infinitive: "lend", forms: ["lent", "lent", "lending", "lends"] },
  { infinitive: "let", forms: ["let", "let", "letting", "lets"] },
  { infinitive: "lie", forms: ["lay", "lain", "lying", "lies"] },
  { infinitive: "light", forms: ["lit", "lit", "lighting", "lights"] },
  { infinitive: "lose", forms: ["lost", "lost", "losing", "loses"] },
  { infinitive: "make", forms: ["made", "made", "making", "makes"] },
  { infinitive: "mean", forms: ["meant", "meant", "meaning", "means"] },
  { infinitive: "meet", forms: ["met", "met", "meeting", "meets"] },
  { infinitive: "pay", forms: ["paid", "paid", "paying", "pays"] },
  { infinitive: "put", forms: ["put", "put", "putting", "puts"] },
  { infinitive: "read", forms: ["read", "read", "reading", "reads"] },
  { infinitive: "ride", forms: ["rode", "ridden", "riding", "rides"] },
  { infinitive: "ring", forms: ["rang", "rung", "ringing", "rings"] },
  { infinitive: "rise", forms: ["rose", "risen", "rising", "rises"] },
  { infinitive: "run", forms: ["ran", "run", "running", "runs"] },
  { infinitive: "say", forms: ["said", "said", "saying", "says"] },
  { infinitive: "see", forms: ["saw", "seen", "seeing", "sees"] },
  { infinitive: "seek", forms: ["sought", "sought", "seeking", "seeks"] },
  { infinitive: "sell", forms: ["sold", "sold", "selling", "sells"] },
  { infinitive: "send", forms: ["sent", "sent", "sending", "sends"] },
  { infinitive: "set", forms: ["set", "set", "setting", "sets"] },
  { infinitive: "shake", forms: ["shook", "shaken", "shaking", "shakes"] },
  { infinitive: "shine", forms: ["shone", "shone", "shining", "shines"] },
  { infinitive: "shoot", forms: ["shot", "shot", "shooting", "shoots"] },
  { infinitive: "show", forms: ["shew", "shown", "showing", "shows"] },
  { infinitive: "shut", forms: ["shut", "shut", "shutting", "shuts"] },
  { infinitive: "sing", forms: ["sang", "sung", "singing", "sings"] },
  { infinitive: "sink", forms: ["sank", "sunk", "sinking", "sinks"] },
  { infinitive: "sit", forms: ["sat", "sat", "sitting", "sits"] },
  { infinitive: "sleep", forms: ["slept", "slept", "sleeping", "sleeps"] },
  { infinitive: "smell", forms: ["smelt", "smelt", "smelling", "smells"] },
  { infinitive: "speak", forms: ["spoke", "spoken", "speaking", "speaks"] },
  { infinitive: "spend", forms: ["spent", "spent", "spending", "spends"] },
  { infinitive: "spread", forms: ["spread", "spread", "spreading", "spreads"] },
  { infinitive: "stand", forms: ["stood", "stood", "standing", "stands"] },
  { infinitive: "steal", forms: ["stole", "stolen", "stealing", "steals"] },
  { infinitive: "stick", forms: ["stuck", "stuck", "sticking", "sticks"] },
  { infinitive: "strike", forms: ["struck", "struck", "striking", "strikes"] },
  { infinitive: "swear", forms: ["swore", "sworn", "swearing", "swears"] },
  { infinitive: "swim", forms: ["swam", "swum", "swimming", "swims"] },
  { infinitive: "swing", forms: ["swung", "swung", "swinging", "swings"] },
  { infinitive: "take", forms: ["took", "taken", "taking", "takes"] },
  { infinitive: "teach", forms: ["taught", "taught", "teaching", "teaches"] },
  { infinitive: "tell", forms: ["told", "told", "telling", "tells"] },
  { infinitive: "think", forms: ["thought", "thought", "thinking", "thinks"] },
  { infinitive: "throw", forms: ["threw", "thrown", "throwing", "throws"] },
  { infinitive: "understand", forms: ["understood", "understood", "understanding", "understands"] },
  { infinitive: "wake", forms: ["woke", "woken", "waking", "wakes"] },
  { infinitive: "wear", forms: ["wore", "worn", "wearing", "wears"] },
  { infinitive: "wet", forms: ["wet", "wet", "wetting", "wets"] },
  { infinitive: "win", forms: ["won", "won", "winning", "wins"] },
  { infinitive: "write", forms: ["wrote", "written", "writing", "writes"] },
    ];


// === Motivation & Badges ===
const motivationalMessages = [
  "Superb work! You’re mastering complexity with style.",
  "Keep going—you’re building fluency one verb at a time.",
  "You did it! Every verb conquered is a step toward mastery.",
  "Amazing effort! Your consistency is your superpower.",
  "You’re unstoppable. The verbs don’t stand a chance!"
];

function getBadge(score) {
  if (score >= 40) return "🌟 Verb Master";
  if (score >= 25) return "🔥 Grammar Gladiator";
  if (score >= 10) return "💪 Conjugation Challenger";
  return "🚀 Verb Explorer";
}

// === DOM Elements ===
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const verbDisplay = document.getElementById("verb");
const quizContainer = document.getElementById("quizContainer");
const correctSound = document.getElementById("correctSound");
const skipButton = document.getElementById("skipButton");
const adBanner = document.getElementById("adBanner");

const inputs = [
  document.getElementById("input1"),
  document.getElementById("input2"),
  document.getElementById("input3"),
  document.getElementById("input4")
];

// === Game State ===
let shuffledVerbs = [];
let currentIndex = 0;
let timeLeft = 600;
let score = 0;
let skippedVerbs = [];
let spokenAlready = [false, false, false, false];
let scoredAlready = [false, false, false, false];

// === Initialization ===
shuffleVerbs();
loadVerb();
startTimer();
inputs.forEach(input => input.addEventListener("input", checkAnswers));
skipButton.addEventListener("click", skipVerb);
startAdRotation();

// === Core Functions ===
function shuffleVerbs() {
  shuffledVerbs = [...verbs].sort(() => Math.random() - 0.5);
  currentIndex = 0;
}

function loadVerb() {
  if (currentIndex >= shuffledVerbs.length) shuffleVerbs();
  const verb = shuffledVerbs[currentIndex];
  verbDisplay.textContent = `Base Form: ${verb.infinitive}`;
  inputs.forEach(input => {
    input.value = "";
    input.className = "neutral";
    input.disabled = false;
  });
  quizContainer.style.backgroundColor = "#fff";
  spokenAlready = [false, false, false, false];
  scoredAlready = [false, false, false, false];
}

function validateInput(inputEl, correctAnswer, index) {
  const userInput = inputEl.value.trim().toLowerCase();
  const correct = correctAnswer.toLowerCase();

  inputEl.classList.remove("correct", "incorrect", "neutral");

  if (userInput.length < correct.length) {
    inputEl.classList.add("neutral");
    return false;
  }

  if (userInput === correct) {
    inputEl.classList.add("correct");
    if (!spokenAlready[index]) {
      const tenseLabels = ["past", "participle", "gerund", "present"];
      speak(correct, tenseLabels[index]);
      spokenAlready[index] = true;
    }
    if (!scoredAlready[index]) {
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
      scoredAlready[index] = true;
    }
    return true;
  } else {
    inputEl.classList.add("incorrect");
    return false;
  }
}

function checkAnswers() {
  const correctForms = shuffledVerbs[currentIndex].forms;
  let allCorrect = true;

  inputs.forEach((input, i) => {
    if (!validateInput(input, correctForms[i], i)) allCorrect = false;
  });

  if (allCorrect) {
    quizContainer.style.backgroundColor = "#d4fdd4";
    correctSound.play();
    setTimeout(() => {
      currentIndex++;
      loadVerb();
    }, 1000);
  } else {
    quizContainer.style.backgroundColor = "#ffd4d4";
  }
}

function skipVerb() {
  const verb = shuffledVerbs[currentIndex];
  skippedVerbs.push(verb.infinitive);
  speak("No worries, let's try another one!");
  currentIndex++;
  loadVerb();
}

function speak(word, tense = "") {
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = (word.toLowerCase() === "read" && ["past", "participle"].includes(tense)) ? "red" : word;
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}

function startTimer() {
  const interval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(interval);
      showFinalScreen();
      return;
    }
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function showFinalScreen() {
  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
  const badge = getBadge(score);
  launchConfetti();

  const shareText = encodeURIComponent(`I just scored ${score} on the Verb Forms Trainer! Can you beat me?`);
  const shareURL = encodeURIComponent(window.location.href);

  const skippedList = skippedVerbs.length > 0
    ? `<p style="margin-top:20px; font-size:1em; color:#e74c3c;">Skipped Verbs: ${skippedVerbs.join(", ")}</p>`
    : `<p style="margin-top:20px; font-size:1em; color:#2ecc71;">You didn’t skip any verbs—amazing!</p>`;

  quizContainer.innerHTML = `
    <h2>⏳ Time's Up!</h2>
    <p style="font-size:1.2em; color:#333;">Final Score: <strong>${score}</strong></p>
    <p style="font-size:1.1em; color:#2ecc71;">${randomMessage}</p>
    <p class="badge">Your Badge: <strong>${badge}</strong></p>
    ${skippedList}
    <button onclick="restartQuiz()">🔁 Try Again</button>
    <p style="margin-top:20px; font-size:1em; color:#555;">Challenge your friends to beat your score!</p>
    <a href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareURL}" target="_blank"
       style="display:inline-block; padding:10px 15px; background:#1da1f2; color:#fff; border-radius:6px; text-decoration:none;">
      🐦 Share on Twitter
    </a>
  `;
  speak(randomMessage);
}

function restartQuiz() {
  score = 0;
  timeLeft = 600;
  skippedVerbs = [];
  scoreDisplay.textContent = "Score: 0";
  timerDisplay.textContent = "Time: 10:00";
  shuffleVerbs();
  loadVerb();
  startTimer();
}

// === Ad Rotation ===
const adImages = ["Espanol.jpg", "impresiones.jpg", "clases_manejo.jpg", "LAL.jpg", "vehiculo_dekra.jpg"];
let adIndex = 0;

function startAdRotation() {
  setInterval(() => {
    adIndex = (adIndex + 1) % adImages.length;
    adBanner.innerHTML = `<img src="${adImages[adIndex]}" alt="Ad ${adIndex + 1}" />`;
  }, 5000);
}