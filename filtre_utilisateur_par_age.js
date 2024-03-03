// Filtrer les utilisateurs par âge
// Écrire une fonction qui filtre les personnes dont l'âge est supérieur à une certaine valeur donnée.
// ________________________________

const personnes = [
    { nom: 'Alice', age: 25 },
    { nom: 'Bob', age: 30 },
    { nom: 'Charlie', age: 20 }
  ];

  function filtrerPersonnesParAge(personnes, ageMinimum){
    return personnesFiltrees(personnes => personnes.age > ageMinimum);
  }

  const ageMinimum = 25;
  const personnesFiltrees = filtrerPersonnesParAge(personnes, ageMinimum);
  console.log(`Utilisateur de ${ageMinimum} ans et plus:`, personnesFiltrees);


  /**
   * Ex : Utilisateurs de 25 ans et plus : [{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }]
   */