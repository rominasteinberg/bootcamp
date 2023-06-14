//Tarea 1:

const array1 = [
  {
    name: "Captain America",
  },
  {
    name: "Hulk",
  },
  {
    name: "Professor X",
  },
  {
    name: "Storm",
  },
  {
    name: "Spiderman",
  },
];

const xmen = ["Professor X", "Storm"]; // Lista de personajes de los X-Men

const xmenCharacters = array1.filter((character) =>
  // Verificar si el nombre del personaje está incluido en la lista de personajes de los X-Men
  xmen.includes(character.name)
);

//console.log(xmenCharacters);

//Tarea 2:

const obj1 = {
  1: { name: "Beast" },
  2: { name: "Firestar" },
  3: { name: "Professor X" },
  4: { name: "Storm" },
};

const obj2 = {
  1: { name: "iron man" },
  2: { name: "hulk" },
  3: { name: "Black widow" },
  4: { name: "thor" },
};

//Añadir nombre de personaje que fue parte de los dos equipos para filtrar usando los objetos
const listCharactersForFilter = [
  "Beast",
  "Firestar",
  "Storm",
  "thor",
  "iron man",
];

// Array nuevo para los personajes del mismo equipo
const sameTeam = [];

//Funcion De utilidad para filtrar objetos
const filterObject = (object, characterList) => {
  for (const index in object) {
    if (characterList.includes(object[index].name)) {
      sameTeam.push(object[index]);
    }
  }
};

const findCharacterSameTeam = (object1, object2, listXmen) => {
  filterObject(object1, listXmen);
  filterObject(object2, listXmen);
  console.log(sameTeam);
};

findCharacterSameTeam(obj1, obj2, listCharactersForFilter);
