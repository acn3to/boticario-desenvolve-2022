function playSound(idAudioElement) {
  document.querySelector(idAudioElement).play();
}

const keyList = document.querySelectorAll(".tecla");

let counter = 0;

while (counter < keyList.length) {
  const key = keyList[counter];
  const instrument = key.classList[1];

  const idAudio = `#som_${instrument}`;

  key.onclick = function () {
    playSound(idAudio);
  };

  counter++;
}
