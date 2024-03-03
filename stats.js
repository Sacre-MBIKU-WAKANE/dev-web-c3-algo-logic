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

function calculerMoyenne(notes) {
  const total = notes.reduce((acc, etudiant) => acc + etudiant.note, 0);
  return total / notes.length;
}

function calculerMediane(notes) {
  const sortedNotes = notes.map(etudiant => etudiant.note).sort((a, b) => a - b);
  const mid = Math.floor(sortedNotes.length / 2);

  if (sortedNotes.length % 2 === 0) {
      return (sortedNotes[mid - 1] + sortedNotes[mid]) / 2;
  } else {
      return sortedNotes[mid];
  }
}

function calculerMode(notes) {
  let modes = {};
  let maxCount = 0;
  let modesArray = [];

  notes.forEach(etudiant => {
      modes[etudiant.note] = (modes[etudiant.note] || 0) + 1;
      if (modes[etudiant.note] > maxCount) {
          maxCount = modes[etudiant.note];
          modesArray = [etudiant.note];
      } else if (modes[etudiant.note] === maxCount) {
          modesArray.push(etudiant.note);
      }
  });

  return modesArray;
}

const moyenne = calculerMoyenne(etudiants);
const mediane = calculerMediane(etudiants);
const mode = calculerMode(etudiants);

console.log("Moyenne des notes : ", moyenne);
console.log("Médiane des notes : ", mediane);
console.log("Mode des notes : ", mode);
/**
 * Ex: Moyenne : 80
       Médiane : 80
       Mode : Aucun
 */
