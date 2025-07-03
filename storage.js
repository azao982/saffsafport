function saveScore(quizId, score, total) {
  // Récupérer l'historique existant ou un tableau vide
  const history = JSON.parse(localStorage.getItem("quizHistory") || "[]");

  // Ajouter la nouvelle entrée avec la date ISO actuelle
  history.push({
    quizId: quizId,
    score: score,
    total: total,
    date: new Date().toISOString()  // date ISO pour pouvoir la formater ensuite
  });

  // Sauvegarder dans localStorage
  localStorage.setItem("quizHistory", JSON.stringify(history));
}
