const array1 = [
  { name: "Captain America" },
  { name: "Hulk" },
  { name: "Professor X" },
  { name: "Storm" },
  { name: "Spiderman" },
];
console.log("Marvel Characters: ", array1);

const obj1 = {
  1: { name: "Beast" },
  2: { name: "Firestar" },
  3: { name: "Professor X" },
  4: { name: "Storm" },
};

const obj2 = {
  1: { name: "Iron man" },
  2: { name: "Hulk" },
  3: { name: "Spiderman" },
  4: { name: "Thor" },
};

// 1) Given an array of objects which contains character of Marvel, filter the characters that are members of X-Men.
const filteredXmenCharacters = array1.filter((character) =>
  Object.values(obj1)
    .map((character) => character.name)
    .includes(character.name)
);
console.log("Filtered X-Men Characters from Marvel: ", filteredXmenCharacters);

// 2) Given 2 arrays of objects (obj1 and obj2) one with members o Avengers and one with members of X-Men, find the characters that are on both teams.
const listCharactersForFilter = ["Beast", "Hulk", "Storm", "Thor", "Iron man"];
console.log("List of characters to filter: ", listCharactersForFilter);

const charactersInXmen = Object.values(obj1).map((character) => character.name);
console.log("X-Men:", charactersInXmen);

const charactersInAvengers = Object.values(obj2).map(
  (character) => character.name
);
console.log("Avengers:", charactersInAvengers);

const filterBothTeams = listCharactersForFilter.filter(
  (character) =>
    charactersInXmen.includes(character) &&
    charactersInAvengers.includes(character)
);
// console.log("Characters in both teams: ", filterBothTeams);

// Function that returns the list of characters or a message notifying that there are no characters with the desired characteristics.
function filterControl(filter) {
  let mess = "There arent characters that are on both teams.";
  if (filter.length == 0) return mess;
  return filter;
}
console.log(filterControl(filterBothTeams));

// 3) Given an array of marvel characters, create a function that sorts them by release date and then shows the list in html format.
const marvelCharacters = [
  { name: "Iron Man", releaseDate: "2008-05-02" },
  { name: "The Incredible Hulk", releaseDate: "2008-06-13" },
  { name: "Thor", releaseDate: "2011-05-06" },
  { name: "Spider-Man: Homecoming", releaseDate: "2017-07-07" },
  { name: "The Avengers", releaseDate: "2012-05-04" },
  { name: "Guardians of the Galaxy", releaseDate: "2014-08-01" },
];

const list = document.getElementById("charactersOrder");
// Function that sorts the marvel characters by their release date
function sortMarvelCharactersByReleaseDate(characters) {
  return characters.sort((f, s) => {
    return new Date(f.releaseDate) - new Date(s.releaseDate);
  });
}
const charactersByReleaseDate =
  sortMarvelCharactersByReleaseDate(marvelCharacters);
// Function that generate an html string with the characters with their release date formated
function generateHTMLList(chatacters) {
  let html = "";
  for (const character of chatacters) {
    const releaseDate = formatDate(character.releaseDate);
    html += `<li>${character.name} - ${releaseDate}</li>`;
  }
  return html;
}
// function that returns formated date, so it will be like "dd/mm/yyyy"
function formatDate(fecha) {
  const date = new Date(fecha);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

document.getElementById("charactersOrder").innerHTML = generateHTMLList(
  charactersByReleaseDate
);
