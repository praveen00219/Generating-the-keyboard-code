let isMuted = false;

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const keyCode = event.keyCode;

  // Update key information
  document.getElementById("key").textContent = key;
  document.getElementById("keyCode").textContent = keyCode;

  // Play sound on keypress if not muted
  if (!isMuted) {
    const audio = document.getElementById("keypress-sound");
    audio.play();
  }
  document.getElementById("soundIndicator").classList.add("sound-indicator");
  setTimeout(() => {
    document
      .getElementById("soundIndicator")
      .classList.remove("sound-indicator");
  }, 1000);

  // Display key combination if any
  const combination = [];
  if (event.ctrlKey) combination.push("Ctrl");
  if (event.altKey) combination.push("Alt");
  if (event.shiftKey) combination.push("Shift");
  if (combination.length > 0) {
    combination.push(key);
    document.getElementById("key").textContent = combination.join(" + ");
  }

  // Store key history
  let keyHistory = document.getElementById("keyHistory").textContent;
  keyHistory = keyHistory === "None" ? key : keyHistory + ", " + key;
  document.getElementById("keyHistory").textContent = keyHistory;

  // Update press count
  const pressCountElement = document.getElementById("pressCount");
  pressCountElement.textContent = parseInt(pressCountElement.textContent) + 1;

  // Animate main container on key press
  const mainContainer = document.getElementById("main-container");
  mainContainer.classList.add("transform", "scale-105");
  setTimeout(() => {
    mainContainer.classList.remove("transform", "scale-105");
  }, 150);
});

document.getElementById("clearHistory").addEventListener("click", function () {
  // Play clear history sound if not muted
  if (!isMuted) {
    const garbage_audio = document.getElementById("clearHistory-sound");
    garbage_audio.play();
  }

  // Clear key history
  document.getElementById("keyHistory").textContent = "None";

  // Animate main container on clear history
  const mainContainer = document.getElementById("main-container");
  mainContainer.classList.add("transform", "scale-95");
  setTimeout(() => {
    mainContainer.classList.remove("transform", "scale-95");
  }, 150);
});

document.getElementById("toggleSound").addEventListener("click", function () {
  isMuted = !isMuted;
  document.getElementById("toggleSound").textContent = isMuted
    ? "Unmute"
    : "Mute";
  document.getElementById("soundIndicator").textContent = isMuted ? "🔇" : "🔊";
});
