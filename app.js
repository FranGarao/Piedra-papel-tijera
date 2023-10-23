const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";

const empate = 0;
const ganar = 1;
const perder = 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

piedraBtn.addEventListener("click", () => {
  play(piedra);
});

papelBtn.addEventListener("click", () => {
  play(papel);
});

tijeraBtn.addEventListener("click", () => {
  play(tijera);
});

function play(userOption) {
  userImg.src = "./multimedia/" + userOption + ".jpeg";
  resultText.innerHTML = "ELIGIENDO...";
  const interval = setInterval(function () {
    const machineOption = calcMachineOption();
    machineImg.src = "./multimedia/" + machineOption + ".jpeg";
  }, 100);
  setTimeout(function () {
    clearInterval(interval);

    const machineOption = calcMachineOption();
    const result = calcResult(userOption, machineOption);

    machineImg.src = "./multimedia/" + machineOption + ".jpeg";
    switch (result) {
      case empate:
        resultText.innerHTML = "EMPATASTE!";
        break;
      case perder:
        resultText.innerHTML = "PERDISTE!";
        break;
      case ganar:
        resultText.innerHTML = "GANASTE!";
        break;
    }
  }, 2000);
}

function calcMachineOption(params) {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return piedra;
    case 1:
      return papel;
    case 2:
      return tijera;
  }
}

function calcResult(userOption, machineOption) {
  if (userOption === machineOption) {
    return empate;
  } else if (userOption === piedra) {
    if (machineOption === papel) return perder;
    if (machineOption === tijera) return ganar;
  } else if (userOption === papel) {
    if (machineOption === piedra) return ganar;
    if (machineOption === tijera) return perder;
  } else if (userOption === tijera) {
    if (machineOption === piedra) return perder;
    if (machineOption === papel) return ganar;
  }
}
