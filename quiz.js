// Sélection du quiz à utiliser (ex. "html", "css", "javascript")
const selectedQuizKey = "html"; // change ça dynamiquement selon ton app
const selectedQuiz = quizzes[selectedQuizKey];
const questions = selectedQuiz.questions;

let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = questions.length;

// Afficher une question
function showQuestion() {
  const questionTitle = document.getElementById('question-title');
  const choicesContainer = document.getElementById('choices');
  const progress = document.getElementById('progress');

  if (currentQuestionIndex >= totalQuestions) {
    finishQuiz();
    return;
  }

  const q = questions[currentQuestionIndex];
  questionTitle.textContent = q.title;
  progress.textContent = `Question ${currentQuestionIndex + 1} / ${totalQuestions}`;

  choicesContainer.innerHTML = "";
  q.choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.classList.add("choice-btn"); // optionnel : pour le style
    btn.onclick = () => {
      if (index === q.answer) score++;
      currentQuestionIndex++;
      showQuestion();
    };
    choicesContainer.appendChild(btn);
  });
}

// Sauvegarder score
function saveScore(quizId, score, total) {
  const history = JSON.parse(localStorage.getItem("quizHistory") || "[]");
  history.push({
    quizId: quizId,
    score: score,
    total: total,
    date: new Date().toISOString()
  });
  localStorage.setItem("quizHistory", JSON.stringify(history));
}

  document.getElementById("home-btn").addEventListener("click", function () {
    window.location.href = "index.html"; // 🔁 change "index.html" selon le chemin réel de ta page d'accueil
  });
// Fin du quiz
function finishQuiz() {
  saveScore(selectedQuizKey, score, totalQuestions);

  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = `
    <h2>🎉 Quiz terminé !</h2>
    <p>Votre score : <strong>${score} / ${totalQuestions}</strong></p>
    <a href="history.html">Voir mon historique</a>
  `;
}

// Lancer le quiz
showQuestion();
