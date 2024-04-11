/**
Muokkaa funktio capitalize palauttamaan saamansa sana kirjoitettuna vain isolla alkukirjaimella
 */

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}


console.log(capitalize('sam'));
console.log(capitalize('ALEX'));
console.log(capitalize('chARLie'));
