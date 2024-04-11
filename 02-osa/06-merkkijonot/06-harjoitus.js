/**
Muokkaa funktio skipFirstCharacter  palauttamaan merkkijono, jossa on saamansa merkkijono ilman sen ensimmäistä merkkiä

 */
function skipFirstCharacter(text) {
    return text.substring(1);

}

// Esimerkki - älä muokkaa
console.log(skipFirstCharacter('Xcode'));
console.log(skipFirstCharacter('Hello'));
