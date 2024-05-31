function submitQuiz() {
  const answers = {
    q1: 'B',
    q2: 'A'
  };

  let score = 0;
  let total = 2;

  for (let question in answers) {
    const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
    if (userAnswer && userAnswer.value === answers[question]) {
      score++;
    }
  }

  const result = document.getElementById('result');
  result.textContent = `Toplam ${total} sorudan ${score} doğru yaptınız!`;
}

let rollCounts = [0, 0, 0, 0, 0, 0];
let totalRolls = 0;

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  rollCounts[roll - 1]++;
  totalRolls++;

  const rollResult = document.getElementById('rollResult');
  rollResult.textContent = `Zarınız ${roll} geldi!`;

  updateStats();
}

function updateStats() {
  const stats = document.getElementById('stats');
  let statsContent = 'Zar sonuçları:\n';
  for (let i = 0; i < rollCounts.length; i++) {
    statsContent += `Sayı ${i + 1}: ${rollCounts[i]} kez (%${((rollCounts[i] / totalRolls) * 100).toFixed(2)})\n`;
  }
  stats.textContent = statsContent;
}
