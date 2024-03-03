// Calculer la somme des âges
// ________________________________

const personnes = [
  { nom: 'Alice', age: 25 },
  { nom: 'Bob', age: 30 },
  { nom: 'Charlie', age: 20 }
];

function calculerSommeAges(personnes) {
  return personnes.reduce((total, personne) => total + personne.age, 0);
}

const sommeAges = calculerSommeAges(personnes);
console.log("La somme des âges est : ", sommeAges);