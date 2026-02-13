function showQuestion() {
  document.getElementById("question").style.display = "block";
}

function yesClicked() {
  document.getElementById("question").style.display = "none";
  document.getElementById("finalMsg").style.display = "block";

  for (let i = 0; i < 40; i++) {
    createHeart();
  }
}

function moveNo() {
  const noBtn = document.getElementById("no");
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}
