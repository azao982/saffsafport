const quizList = document.getElementById("quiz-list");

for (const id in quizzes) {
  const quiz = quizzes[id];

  // Création de la card
  const card = document.createElement("div");
  card.className = "quiz-card";

  // Titre du quiz
  const title = document.createElement("h3");
  title.textContent = quiz.title;
  title.className = "quiz-title";

  // Bouton d'accès au quiz
  const btn = document.createElement("button");
  btn.textContent = "Lancer le quiz ▶️";
  btn.className = "quiz-btn";
  btn.onclick = () => {
    window.location.href = `quiz.html?id=${id}`;
  };

  // Ajout des éléments à la card
  card.appendChild(title);
  card.appendChild(btn);
  quizList.appendChild(card);
}
