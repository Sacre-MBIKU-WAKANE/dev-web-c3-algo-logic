// Fusionner deux tableaux d'objets
// Écrire une fonction qui fusionne les deux tableaux en éliminant les doublons (s'il y en a) et en conservant l'ordre.
// ________________________________

const tableau1 = [
  { id: 1, nom: 'Alice' },
  { id: 2, nom: 'Bob' }
];
const tableau2 = [
  { id: 2, nom: 'Bob' },
  { id: 3, nom: 'Charlie' }
];
function fusionnerTableauxSansDoublons(tableau1, tableau2) {
  const mergedArray = [...tableau1];

  tableau2.forEach(item => {
      if (!mergedArray.some(elem => elem.id === item.id)) {
          mergedArray.push(item);
      }
  });

  return mergedArray;
}

const tableauFusionne = fusionnerTableauxSansDoublons(tableau1, tableau2);
console.log(tableauFusionne);
/**
 * Ex: [{ id: 1, nom: 'Alice' }, { id: 2, nom: 'Bob' }, { id: 3, nom: 'Charlie' }]
 */