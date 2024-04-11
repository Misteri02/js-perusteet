/**
Moukkaa funktio concatInitials palauttamaan merkkijono, joka yhdistää parametrit firstNameInitial ja lastNameInitial.
 */

function concatInitials(firstNameInitial, lastNameInitial) {
    let kokoNimi = firstNameInitial + lastNameInitial;
    return kokoNimi;
}

// Esimerkki - älä muokkaa
console.log(concatInitials('J', 'D'));
console.log(concatInitials('S', 'B'));
