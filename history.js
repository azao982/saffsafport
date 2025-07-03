const historyContainer = document.getElementById("history-container");
const history = JSON.parse(localStorage.getItem('quizHistory')) || [];

if (history.length === 0) {
  historyContainer.innerHTML = "<p style='text-align: center; font-style: italic;'>Aucune tentative enregistrée.</p>";
} else {
  history.forEach(entry => {
    const div = document.createElement("div");
    div.className = "history-item";

    // Format date lisible
    const date = new Date(entry.date);
    const dateStr = date.toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" });

    let message = "";
    if (entry.score < 5) {
      message = `<span class="history-message">💡 Vous pouvez mieux faire !</span>`;
    } else if (entry.score >= 5 && entry.score < 8) {
      message = `<span class="history-message">👍 Bon effort, continuez !</span>`;
    } else {
      message = `<span class="history-message">🎉 Excellent travail !</span>`;
    }

    div.innerHTML = `
      <div>
        📅 <strong>Le ${dateStr}</strong><br>
        📝 QCM : <span class="history-title">${entry.quizId}</span><br>
        🎯 Score : <span class="history-score">${entry.score}/${entry.total}</span><br>
        ${message}
      </div>
    `;
    historyContainer.appendChild(div);
  });
}
