// Recherche récursive  :
// Écrire une fonction récursive qui recherche un élément spécifique dans cette structure et retourne son chemin ou sa position.
// ________________________________

const structure = {
  nom: 'A',
  enfants: [
    {
      nom: 'B',
      enfants: [
        { nom: 'C', enfants: [] },
        { nom: 'D', enfants: [] }
      ]
    },
    { nom: 'E', enfants: [] }
  ]
};
const recherche = 'D';

function chercherElement(structure, recherche, chemin = []) {
  if (structure.nom === recherche) {
      chemin.push(structure.nom);
      return chemin;
  }

  for (let enfant of structure.enfants) {
      const resultat = chercherElement(enfant, recherche, [...chemin, structure.nom]);
      if (resultat) {
          return resultat;
      }
  }

  return null;
}

const cheminElement = chercherElement(structure, recherche);

if (cheminElement) {
  console.log(`Chemin vers l'élément "${recherche}" : ${cheminElement.join(' -> ')}`);
} else {
  console.log(`L'élément "${recherche}" n'a pas été trouvé dans la structure.`);
}


/**
 * Ex : [0, 1] (ce qui signifie que 'D' se trouve dans la première branche à l'indice 0, puis dans la deuxième branche à l'indice 1)
 */