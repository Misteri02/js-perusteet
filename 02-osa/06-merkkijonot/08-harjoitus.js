/**
Muokkaa funktio sayHello jotta se sisällyttää parametrina saamansa nimen tervehdykseen. 

 */
function sayHello(name) {
    let viesti = "hello ";
    viesti += name;
    return viesti;
  }
  
  console.log(sayHello('Alex'));
  console.log(sayHello('Sam'));
