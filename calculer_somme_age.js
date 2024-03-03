// Trier les utilisateurs par ordre alphabétique
//  Écrire une fonction qui calcule la somme de tous les âges dans le tableau.
// ________________________________

const personnes = [
  { nom: 'Alice', age: 25 },
  { nom: 'Bob', age: 30 },
  { nom: 'Charlie', age: 20 }
];
const ageMinimum = 25;

function calculeSommmeAge() {
  let sommeAge = 0
  personnes.forEach(age => {
    sommeAge = sommeAge + age.age
  });
  return sommeAge;
}
console.log(calculeSommmeAge());

function sortedUsers() {
  
  let arrayOfNames = [];

  personnes.forEach((personne) => {
    arrayOfNames.push(personne.nom);
  })

  const trie = arrayOfNames.sort();

  
  return trie;
}

console.log(sortedUsers());

/**
 * Ex: Somme des âges : 75
 */