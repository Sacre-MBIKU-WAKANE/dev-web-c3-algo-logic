// Générer des statistiques à partir des données :
// Écrire une fonction qui calcule la moyenne, la médiane et le mode des notes des étudiants.
// ________________________________

const etudiants = [
  { nom: "Alice", note: 80 },
  { nom: "Bob", note: 70 },
  { nom: "Charlie", note: 85 },
  { nom: "David", note: 75 },
  { nom: "Eve", note: 90 },
];

function calculAverage() {
  let noteArray = [];

  etudiants.forEach((student) => {
    noteArray.push(student.note);
  })


  let notesSum = eval(noteArray.join("+"));
  let length = etudiants.length;
  console.log(length);

  console.log(notesSum);

  const average = Number(notesSum / length);

  return average;


}
// calculAverage()
console.log(calculAverage());

/**
 * Ex: Moyenne : 80
       Médiane : 80
       Mode : Aucun
 */
