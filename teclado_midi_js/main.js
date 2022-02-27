function playSound(idAudioElement) {
  document.querySelector(idAudioElement).play();
}

const keyList = document.querySelectorAll(".tecla");

for (let counter = 0; counter < keyList.length; counter++) {
  const key = keyList[counter];
  const instrument = key.classList[1];
  const idAudio = `#som_${instrument}`;

  key.onclick = function () {
    playSound(idAudio);
  };
}
