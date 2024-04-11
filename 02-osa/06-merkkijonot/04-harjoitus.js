/**
Muokkaa funktio getFirstCharacter palauttamaan saamansa merkkijonon ensimmäinen merkki
 */

function getFirstCharacter(name) {
    return name.substring(0, 1);
}

console.log(getFirstCharacter('Amsterdam'));
console.log(getFirstCharacter('Japan'));
