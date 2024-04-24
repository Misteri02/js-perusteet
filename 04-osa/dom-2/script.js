/* 
Kirjoita JavaScript-koodi, joka lisää tapahtumankäsittelijän napille.

Kun nappia klikataan, funktion tulisi:
- Hakea arvo syötekentästä.
- Luoda uusi <li> elementti ja asettaa sen tekstisisältö syötekentän arvoksi.
- Lisätä uusi <li> elementti hedelmälistan <ul>-elementtiin.

Varmista, että syötekenttä tyhjennetään hedelmän lisäämisen jälkeen.
*/


//list id="fruitList">
//input id="fruitInput" placeholder="Hedelmän nimi"
//button id="addFruitBtn"

const button = document.querySelector("#addFruitBtn");

const addToList = () => {
    const fruitInput = document.querySelector('#fruitInput');
    const fruitList = document.querySelector('#fruitList');

    if (fruitInput.value){
    const li = document.createElement('li')
    li.textContent = fruitInput.value;
    fruitList.appendChild(li);
    fruitInput.value = ''
    } else {
        alert("lisää hedelmän nimi luupää")
    }
}

button.addEventListener('click', addToList);