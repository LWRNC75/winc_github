// A Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen. Gebruik de .push method.

const addTheWordCool = (array) => {
  array.push("cool");
  return array;
};

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// B Schrijf een JavaScript functie die het aantal elementen in een array retourneert.

const amountOfElementsInArray = (array) => array.length;

console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));

// C Schrijf een JavaScript functie om het éérste element uit een array te retourneren. PS: Bij welk cijfer begint een array ook alweer met tellen?

const selectBelgiumFromBenelux = (array) => array[0];

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

// D Schrijf een JavaScript functie om het laatste element uit een array te retourneren.

const lastElementInArray = (array) => array.pop();
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); // resultaat: "Schildpad"

// E Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren . Gebruik .slice én de alternatieve optie .splice. Wat is het verschil tussen deze functies? Hint: mutability.

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function (array) {
  const newArray = array.slice(1, 4);
  //   check nieuwe array
  console.log("Nieuwe array:", newArray);
  return newArray;
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]

// F Write a simple JavaScript program to join all elements of the following array into a string (with spaces). ps: deze opdracht hebben we in het Engels gelaten omdat er een dikke tip in zit over welke array method je gaat gebruiken.

const stringsTogether = (array) => array.join(" ");

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"
