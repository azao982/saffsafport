const quizzes = {
  html: {
    title: "HTML Basics",
    questions: [
      {
        title: "Que signifie HTML ?",
        choices: ["HyperText Markup Language", "HighText Machine Language", "Hyper Tool Markup Language"],
        answer: 0
      },
      {
        title: "Quel tag est utilisé pour un lien ?",
        choices: ["<link>", "<a>", "<href>"],
        answer: 1
      },
      {
        title: "Quel élément contient le contenu principal d’une page ?",
        choices: ["<main>", "<section>", "<body>"],
        answer: 0
      },
      {
        title: "Quelle balise est utilisée pour une image ?",
        choices: ["<img>", "<picture>", "<image>"],
        answer: 0
      },
      {
        title: "Quelle balise est utilisée pour un paragraphe ?",
        choices: ["<text>", "<paragraph>", "<p>"],
        answer: 2
      },
      {
        title: "Quelle est la bonne structure de base d’un document HTML ?",
        choices: ["<html><head></head><body></body></html>", "<body><head></head></body>", "<html><body></body></html>"],
        answer: 0
      },
      {
        title: "Quelle balise permet de créer un titre principal ?",
        choices: ["<head>", "<h1>", "<title>"],
        answer: 1
      },
      {
  title: "Quelle balise HTML est utilisée pour créer une liste à puces ?",
  choices: ["<ul>", "<ol>", "<li>"],
  answer: 0
},
{
  title: "Quelle balise permet d’ajouter une ligne dans un tableau ?",
  choices: ["<tr>", "<td>", "<table>"],
  answer: 0
},
{
  title: "Quelle balise est utilisée pour les méta-informations ?",
  choices: ["<meta>", "<info>", "<data>"],
  answer: 0
}

    ]
  },

  css: {
    title: "CSS Selectors",
    questions: [
      {
        title: "Quel symbole sélectionne une classe en CSS ?",
        choices: [".", "#", "*"],
        answer: 0
      },
      {
        title: "Quelle propriété change la couleur du texte ?",
        choices: ["font-style", "text-color", "color"],
        answer: 2
      },
      {
        title: "Quel sélecteur cible l’élément avec l’id 'header' ?",
        choices: ["#header", ".header", "header"],
        answer: 0
      },
      {
        title: "Quelle propriété permet de centrer un texte ?",
        choices: ["text-align", "center", "margin"],
        answer: 0
      },
      {
        title: "Que signifie 'px' en CSS ?",
        choices: ["Pixel", "Pourcentage", "Point x"],
        answer: 0
      },
      {
        title: "Quel propriété change l’arrière-plan ?",
        choices: ["color", "background-color", "border"],
        answer: 1
      },
      {
        title: "Quel sélecteur cible tous les éléments ?",
        choices: ["*", "all", "every"],
        answer: 0
      },
      {
  title: "Quelle propriété permet de changer la taille de la police ?",
  choices: ["font-weight", "font-size", "text-size"],
  answer: 1
},
{
  title: "Quel mot-clé est utilisé pour rendre un élément invisible ?",
  choices: ["display: none", "visibility: hide", "opacity: 0"],
  answer: 0
},
{
  title: "Quelle propriété est utilisée pour les marges intérieures ?",
  choices: ["margin", "padding", "border-spacing"],
  answer: 1
}

    ]
  },

  javascript: {
    title: "JavaScript",
    questions: [
      {
        title: "Comment déclare-t-on une variable ?",
        choices: ["variable x;", "v x;", "let x;"],
        answer: 2
      },
      {
        title: "Quelle méthode affiche un message dans la console ?",
        choices: ["log.console()", "print()", "console.log()"],
        answer: 2
      },
      {
        title: "Quelle est la valeur de typeof '42' ?",
        choices: ["number", "string", "boolean"],
        answer: 1
      },
      {
        title: "Quelle syntaxe est correcte pour une fonction ?",
        choices: ["function() {}", "def function() {}", "function = () => {}"],
        answer: 0
      },
      {
        title: "Quel symbole compare des valeurs et types ?",
        choices: ["==", "=", "==="],
        answer: 2
      },
      {
        title: "Quel mot-clé permet une condition ?",
        choices: ["if", "check", "condition"],
        answer: 0
      },
      {
        title: "Quelle méthode convertit une chaîne en entier ?",
        choices: ["parseInt()", "toString()", "Number()"],
        answer: 0
      },
      {
  title: "Quel mot-clé permet de créer une constante ?",
  choices: ["const", "constant", "var"],
  answer: 0
},
{
  title: "Comment ajoute-t-on un commentaire sur une ligne ?",
  choices: ["// commentaire", "/* commentaire */", "# commentaire"],
  answer: 0
},
{
  title: "Quelle structure est utilisée pour répéter du code ?",
  choices: ["if", "loop", "for"],
  answer: 2
}

    ]
  }
};
