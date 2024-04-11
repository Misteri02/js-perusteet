/**
Muokkaa funktio getLastCharacter palauttamaan saamansa merkkijonon viimeinen merkki
 */

function getLastCharacter(name) {
    let text = name.substring(name.length - 1);
    return text;    
  }
  
  console.log(getLastCharacter('Sam'));
  console.log(getLastCharacter('Alex'));
  console.log(getLastCharacter('Charley'));
