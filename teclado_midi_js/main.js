function playSound(audioElement) {
  const element = document.querySelector(audioElement);

  if (element && element.localName === "audio") {
    element.play();
  } else {
    alert("Elemento não encontrado ou seletor inválido");
  }
}

const keyList = document.querySelectorAll(".tecla");

for (let counter = 0; counter < keyList.length; counter++) {
  const key = keyList[counter];
  const instrument = key.classList[1];
  const idAudio = `#som_${instrument}`;

  key.onclick = function () {
    playSound(idAudio);
  };

  key.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      key.classList.add("ativa");
    }
  };

  key.onkeyup = function () {
    key.classList.remove("ativa");
  };
}
