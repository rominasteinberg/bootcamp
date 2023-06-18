// Given an array of objects which contains characters of Marvel, filter the characters that are members of X-Men

const array1 = [
    {
        name: 'Captain America',
        member: 'Avengers'
    },
    {
        name: 'Hulk',
        member: 'Avengers'
    },
    {
        name: 'Professor X',
        member: 'X-Men'
    },
    {
        name: 'Storm',
        member: 'X-Men'
    },
    {
        name: 'Spiderman',
        member: 'Avengers'
    },
];

const xMen = array1.filter((character) => character.member.includes('X-Men'));

console.log(xMen);

// -----------------------------------------------------------------------------------------------------------------------------------
// Given two object of objects, one with members of Avengers and one with members of X-Men, find the characters that are on both teams
// -----------------------------------------------------------------------------------------------------------------------------------

const obj1 = {
    1: { name: 'Beast', member: 'Avengers, X-men' },
    2: { name: 'Firestar', member: 'Avengers, X-men' },
    3: { name: 'Professor X', member: 'X-men' },
    4: { name: 'Storm', member: 'Avengers, X-men' }
};
  
const obj2 = {
    1: { name: 'Iron Man', member: 'Avengers, X-men' },
    2: { name: 'Hulk', member: 'Avengers' },
    3: { name: 'Black Widow', member: 'Avengers' },
    4: { name: 'Thor', member: 'Avengers, X-men' },
};

// -----------------------------------------------------------------------------------------------------------------------------------
// Sort using Object.keys
// -----------------------------------------------------------------------------------------------------------------------------------

const bothTeamsArray1 = ['1', '2', '4'];
const bothTeamsArray2 = ['1', '4'];

const bothTeams1 = Object.keys(obj1).filter((key) => bothTeamsArray1.includes(key)).reduce((obj, key) => {
    obj[key] = obj1[key];
    return obj;
}, {});

const bothTeams2 = Object.keys(obj2).filter((key) => bothTeamsArray2.includes(key)).reduce((obj, key) => {
    obj[key] = obj2[key];
    return obj;
}, {});

console.log(bothTeams1);
console.log(bothTeams2);


// -----------------------------------------------------------------------------------------------------------------------------------
// Sort using Object.values
// -----------------------------------------------------------------------------------------------------------------------------------

const bothTeams11 = Object.values(obj1).filter((character) => character.member.includes('Avengers, X-men')).reduce((members, character, index) => {
    members[index + 1] = character;
    return members;
}, {});

const bothTeams22 = Object.values(obj2).filter((character) => character.member.includes('Avengers, X-men')).reduce((members, character, index) => {
    members[index + 1] = character;
    return members;
}, {});

console.log(bothTeams11);
console.log(bothTeams22);

// -----------------------------------------------------------------------------------------------------------------------------------
// Sort using Object.assign
// -----------------------------------------------------------------------------------------------------------------------------------

const bothTeams111 = Object.assign({}, Object.values(obj1).filter((character) => character.member.includes('Avengers, X-men')));
const bothTeams222 = Object.assign({}, Object.values(obj2).filter((character) => character.member.includes('Avengers, X-men')));

console.log(bothTeams111);
console.log(bothTeams222);

// -----------------------------------------------------------------------------------------------------------------------------------
// Given an array of Marvel characters, create a function that sorts them by release date and then shows the list in HTML format.
// -----------------------------------------------------------------------------------------------------------------------------------

const list = document.getElementById('sortedCharacters');

const array2 = [
    {
        name: 'Captain America',
        releaseDate: 'December 1940'
    },
    {
        name: 'Hulk',
        releaseDate: 'May 1962'
    },
    {
        name: 'Professor X',
        releaseDate: 'September 1963'
    },
    {
        name: 'Storm',
        releaseDate: 'May 1975'
    },
    {
        name: 'Spiderman',
        releaseDate: 'August 1962'
    },
];

const sortMarvelCharactersByReleaseDate = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            if (j+1 >= array.length) {  //check overflow of the array
                break;
            }

            let dateA = new Date(array[j].releaseDate);
            let dateB = new Date(array[j+1].releaseDate);

            if (dateA > dateB) {    //bubblesort
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    array.forEach(character => {
        let li = document.createElement('li');
        li.innerText = `Character: ${character.name}
                          Release Date: ${character.releaseDate}
                         `;
        list.appendChild(li);
    });
    return array;
};

console.log(sortMarvelCharactersByReleaseDate(array2));

// -----------------------------------------------------------------------------------------------------------------------------------
// Best way to sort
// -----------------------------------------------------------------------------------------------------------------------------------

// array.sort(function compare(a, b) {
//     let dateA = new Date(a.releaseDate);
//     let dateB = new Date(b.releaseDate);
//     return dateA - dateB;
// });