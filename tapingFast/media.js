// Element du DOM
const audio = document.querySelector('audio');
const playBtn = document.getElementById('play');
const rangeBtn = document.getElementById('rangeBtn');


playBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
});

// Contrôle du volume
rangeBtn.addEventListener("input", () => {
  audio.volume = rangeBtn.value;
});

