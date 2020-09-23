// A Schrijf een JavaScript functie die een bepaald item weet te vinden en retourneren op basis van een bepaalde value.
// Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.

const superheroes = [
    { name: 'Batman', alter_ego: 'Bruce Wayne' },
    { name: 'Superman', alter_ego: 'Clark Kent' },
    { name: 'Spiderman', alter_ego: 'Peter Parker' }
];
const findSpiderMan = function(superheroes) {
    return superheroes.find(function(superhero) {
        return superhero.name === 'Spiderman';
    });
};
console.log('name:', findSpiderMan(superheroes));
  // Find Spiderman
  // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//   B In een array met integers. Zorg dat je een array returned met de integers verdubbeld. Gebruik de .forEach method of, een level hoger: de .map method.

const doubleArrayValues = function(array) {
    let newArray = [];
    array.forEach(number => {
      newArray.push(number * 2);
    });
    return newArray;
};

console.log('Double 1,2,3:', doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

// C In een array met integers. Schrijf een JavaScript functie die een checkt of er een integer in de array aanwezig is die groter is dan 10.

const containsNumberBiggerThan10 = function(array) {
    return array.some(number => {
        return number > 10;
    });
};

console.log('Number Greater then 10:', containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]) );
// result should be true

// console.log("Number Greater then 10:", containsNumberBiggerThan10([1,2,1,2,1,2]) );
  // result should be false


// D In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.

function isItalyInTheGreat7(array) {
    return array.includes('Italy');
}
console.log(
    'Check Italy:', isItalyInTheGreat7([ 'Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States' ]) );
// result should be true

// E In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt. Gebruikt .forEach.

const tenfold = function(array) {
    let newArray = [];
    array.forEach(number => {
      newArray.push(number * 10);
    });
    return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

// F In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en true or false retourneert.

function isBelow100(array) {
    return array.every(number => {
        return number < 100;
    });
};
console.log(
    'Below 100:', isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);

// G Bonus! Deze laatste is wat extra uitdagend. We hopen dat jullie deze challenge accepteren. Gebruik Google en wees een beetje baldadig (gebruik wellicht een klein stukje code die je kopieert).

const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const bigSum = function(array) {
    return array.reduce((total, number) => {
        return total + number;
    });
};
console.log('Total sum:', bigSum(numbers));
// result should be 1118
