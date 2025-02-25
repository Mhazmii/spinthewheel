let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');

// Daftar sudut untuk setiap hadiah (sesuai dengan posisi di roda)
let angles = {
  "5DM": [0, 360],
  "10DM": [45, 405],
  "0": [90, 450, 135, 495, 180, 540],
  "25DM": [225, 585],
  "50DM": [270, 630],
  "70DM": [315, 675]
};

spinBtn.onclick = function() {
  let random = Math.random();
  let chosenAngle;

  if (random < 0.80) { // 80% kemungkinan untuk 5DM
    chosenAngle = angles["5DM"][Math.floor(Math.random() * angles["5DM"].length)];
  } else if (random < 0.90) { // 10% kemungkinan untuk 0DM
    chosenAngle = angles["0"][Math.floor(Math.random() * angles["0"].length)];
  } else if (random < 0.95) { // 5% kemungkinan untuk 10DM
    chosenAngle = angles["10DM"][Math.floor(Math.random() * angles["10DM"].length)];
  } else { // Sisanya jarang muncul
    let rarePrizes = ["25DM", "50DM", "70DM"];
    let rarePrize = rarePrizes[Math.floor(Math.random() * rarePrizes.length)];
    chosenAngle = angles[rarePrize][Math.floor(Math.random() * angles[rarePrize].length)];
  }

  let extraSpins = 360 * (5 + Math.floor(Math.random() * 5)); // 5-9 putaran tambahan
  let finalRotation = extraSpins + chosenAngle;
  
  wheel.style.transition = "transform 4s ease-out"; // Animasi smooth
  wheel.style.transform = "rotate(" + finalRotation + "deg)";
};