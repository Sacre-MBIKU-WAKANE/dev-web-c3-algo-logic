// Trouver le plus jeune/plus âgé
// Écrire une fonction qui trouve la personne la plus jeune et la plus âgée dans le tableau.
// ______________________________

const personnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 20 },
];

function sortedFromYoungestToOldest () {
  const resut = personnes.sort(
    (a, b) => a.age - b.age
  );
  return resut;
}

console.log(sortedFromYoungestToOldest());

function sortedFromtOldestToYounges () {
  const resut = personnes.sort(
    (a, b) => b.age - a.age
  );
  return resut;
}

console.log(sortedFromtOldestToYounges());

/**
   * Ex: Plus jeune : { nom: 'Charlie', age: 20 }
         Plus âgé : { nom: 'Bob', age: 30 }

   */
