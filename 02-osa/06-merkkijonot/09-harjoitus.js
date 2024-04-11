/**
Muokkaa funktio getFullName function palauttamaan interpolation avulla so that it returns the person's full name by utilizing string interpolation.
 */

function getFullName(firstName, lastName) {
    let kokoNimi = firstName + " " + lastName;
    return kokoNimi;
  }
  
  console.log(getFullName('Sam', 'Doe'));
  console.log(getFullName('Alex', 'Blue'));
