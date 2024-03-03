// Trouver les doublons
// Écrire une fonction qui trouve et retourne les objets en double dans le tableau en se basant sur cette propriété identificatrice.
// ________________________________

const elements = [
  { id: 1, nom: "Alice" },
  { id: 2, nom: "Bob" },
  { id: 3, nom: "Alice" },
];

function eliminerDoublons(elements) {
  return elements.filter((element, index) => elements.findIndex(e => e.nom === element.nom) === index);
}

const elementsUniques = eliminerDoublons(elements);
console.log("Les éléments uniques sont : ", elementsUniques);

/**
 * Ex : [{ id: 3, nom: 'Alice' }]
 */
