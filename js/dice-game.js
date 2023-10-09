const playDomQuery = document.getElementById("playDomQuery");
const diceDomResult = document.getElementById("diceDomResult");

playDomQuery.addEventListener("click", resetDice);
playDomQuery.addEventListener("click", playDice);

function resetDice() {
  let dices = document.querySelectorAll(".box");

  for (let i = 0; i < dices.length; i++) {
    dices[i].classList.remove("hidden");
    dices[i].classList.add("hidden");
  }
  return;
}

function playDice() {
  const userDice = Math.floor(Math.random() * 6) + 1;
  const robotDice = Math.floor(Math.random() * 6) + 1;

  console.log(userDice, robotDice);

  let tempDice;

  if (userDice === 1) {
    tempDice = document.querySelector(".user .box-one");
  } else if (userDice === 2) {
    tempDice = document.querySelector(".user .box-two");
  } else if (userDice === 3) {
    tempDice = document.querySelector(".user .box-three");
  } else if (userDice === 4) {
    tempDice = document.querySelector(".user .box-four");
  } else if (userDice === 5) {
    tempDice = document.querySelector(".user .box-five");
  } else if (userDice === 6) {
    tempDice = document.querySelector(".user .box-six");
  }
  tempDice.classList.remove("hidden");

  if (robotDice === 1) {
    tempDice = document.querySelector(".robot .box-one");
  } else if (robotDice === 2) {
    tempDice = document.querySelector(".robot .box-two");
  } else if (robotDice === 3) {
    tempDice = document.querySelector(".robot .box-three");
  } else if (robotDice === 4) {
    tempDice = document.querySelector(".robot .box-four");
  } else if (robotDice === 5) {
    tempDice = document.querySelector(".robot .box-five");
  } else if (robotDice === 6) {
    tempDice = document.querySelector(".robot .box-six");
  }
  tempDice.classList.remove("hidden");

  if (userDice > robotDice) {
    diceDomResult.innerHTML = "You win!";
  } else if (userDice < robotDice) {
    diceDomResult.innerHTML = "You lose!";
  } else {
    diceDomResult.innerHTML = "Tie!";
  }
}
