/**
Täydennä funktio evenOrOdd siten, että se palauttaa merkkijonon "even", kun se saa parametriksi parillisen luvun, ja muuten "odd".
 */

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Luku on parillinen";
      } else {
        return "Luku on pariton";
      }
         
}

// Esimerkkikäyttö - älä muokkaa
console.log(evenOrOdd(25)); // "odd"
console.log(evenOrOdd(18)); // "even"
console.log(evenOrOdd(-17)); // "odd"

// Treenaa: Keksi itse samanlainen funktio eri nimellä




// Kutsu tekemääsi funktiota