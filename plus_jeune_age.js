// Trouver le plus jeune/plus âgé
// Écrire une fonction qui trouve la personne la plus jeune et la plus âgée dans le tableau.
// ______________________________

const personnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 20 },
];

function trouverPersonnesExtremes(personnes) {
  let personnePlusJeune = personnes.reduce((min, current) => current.age < min.age ? current : min, personnes[0]);
  let personnePlusAgee = personnes.reduce((max, current) => current.age > max.age ? current : max, personnes[0]);

  return { personnePlusJeune, personnePlusAgee };
}

const { personnePlusJeune, personnePlusAgee } = trouverPersonnesExtremes(personnes);

console.log("Personne la plus jeune :", personnePlusJeune);
console.log("Personne la plus âgée :", personnePlusAgee);

/**
   * Ex: Plus jeune : { nom: 'Charlie', age: 20 }
         Plus âgé : { nom: 'Bob', age: 30 }

   */
