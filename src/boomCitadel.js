const clockTitle = document.querySelector("#tillBoom");

clockTitle.classList.add("bigFont");

let minute = "03";
let second = "00";
let currentMin = 3;
let currentSec = 60;

function tillCitadelBoom() {
  // const currentYear = new Date().getFullYear();
  // const currentHour = new Date().getHours();
  // const currentMin = new Date().getMinutes();
  // const currentSec = new Date().getSeconds();
  // const SEC_TO_DAY = 1000 * 60 * 69 * 24;

  // const now = new Date();
  // const byeBiden = new Date("2022-4-10");

  // const day = String(Math.floor((byeBiden - now) / SEC_TO_DAY));
  // const hour = shapeTime(24, currentHour);

  clockTitle.innerText = `CITADEL EXPLODES IN 00:${minute}:${second}`;
  clockTitle.style.fontSize = "10vw";
  if (minute === "00") {
    clockTitle.style.color = "red";
  }
  // console.log(clockTitle.innerText);
}

function shapeSec() {
  if (currentSec === 0) {
    currentSec = 60;
    second = "00";
  } else {
    currentSec = currentSec - 1;
    second = String(currentSec).padStart(2, "0");
  }
}

function shapeMin() {
  if (currentMin === 0) {
    title.innerHTML = "GAMEOVER";
    localStorage.clear();
    formEl.classList.add("hidden");
  } else {
    currentMin = currentMin - 1;
    minute = String(currentMin).padStart(2, "0");
  }
}
function timeBomb() {
  setInterval(shapeSec, 1000);
  setInterval(shapeMin, 60000);
  setInterval(tillCitadelBoom, 1000);
  shapeSec();
  shapeMin();
  tillCitadelBoom();
  setTimeout(() => {
    grantedEl.classList.add(CLASSNAME_HIDDEN);
    title.innerHTML = "GAMEOVER";
    title.classList.remove("gameTitle");
    title.classList.add("gameOver");
    localStorage.clear();
    initialEl.classList.remove(CLASSNAME_HIDDEN);
    gameBackgroundVideo.pause();
    gameOverVideo.classList.remove(CLASSNAME_HIDDEN);
    gameBackgroundVideo.classList.add(CLASSNAME_HIDDEN);
    gameOverVideo.play();
    gameoverMusic.play();

    setTimeout(() => {
      title.classList.remove(CLASSNAME_HIDDEN);
    }, 6000);
    setTimeout(() => {
      newGameEl.classList.remove(CLASSNAME_HIDDEN);
    }, 9000);
  }, 1000 * 60 * 3);
}
