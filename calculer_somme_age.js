// Trier les utilisateurs par ordre alphabétique
//  Écrire une fonction qui calcule la somme de tous les âges dans le tableau.
// ________________________________

const personnes = [
    { nom: 'Alice', age: 25 },
    { nom: 'Bob', age: 30 },
    { nom: 'Charlie', age: 20 }
  ];
  const ageMinimum = 25;

  function calculerSommeAge(personnes, ageMinimum){
    const personnesFiltrees = personnes.filter(personnes => 
      personnes.age>= ageMinimum);
    const sommeAges = personnesFiltrees.reduce((total, personnes) => 
      total + personnes.age, 0);
    const personnesTrie = personnesFiltrees.sort((a, b) => a.nom.localeCompare(a.nom));

          return {sommeAges , personnesTrie};


  }

  const {sommeAges, personnesTrie} = calculerSommeAge(personnes, ageMinimum);
  console.log('Somme des âges des personnes de', ageMinimum, 'ans et plus :', sommeAges);
  console.log('Personnes de', ageMinimum, 'ans et plus triées par ordre alphabétique :', personnesTrie);


  /**
   * Ex: Somme des âges : 75
   */