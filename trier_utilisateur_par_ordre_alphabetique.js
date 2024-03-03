// Calculer la somme des âges
// ________________________________

const personnes = [
  { nom: 'ZAlice', age: 25 },
  { nom: 'Bob', age: 30 },
  { nom: 'Charlie', age: 20 }
];


function sortedByAlphabeticsOrder () {

  let arrayOfNames = [];

  personnes.forEach((personne) => {
    arrayOfNames.push(personne.nom);
  });

  const resut = arrayOfNames.sort();
  return resut;
}

console.log(sortedByAlphabeticsOrder());