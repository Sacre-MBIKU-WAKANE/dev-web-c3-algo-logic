// Filtrer les utilisateurs par âge
// Écrire une fonction qui filtre les personnes dont l'âge est supérieur à une certaine valeur donnée.
// ________________________________

const personnes = [
    { nom: 'Alice', age: 25 },
    { nom: 'Bob', age: 30 },
    { nom: 'Charlie', age: 20 }
  ];
  const ageMinimum = 25;

  function filterAge () {
    const arrayOfUsers = personnes.filter((personne) => personne.age >= 25);

    return arrayOfUsers;
  }

  console.log(filterAge());

  function filterAgeUnderCondition (data) {
    const arrayOfUsers = personnes.filter((personne) => personne.age > data);

    return arrayOfUsers;
  }

  console.log(filterAgeUnderCondition(25));

  /**
   * Ex : Utilisateurs de 25 ans et plus : [{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }]
   */