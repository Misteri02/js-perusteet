/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/

let numeroita, kysymys;

while (numeroita !== 0) {
  numeroita = Number(prompt("syötä numero"));

  
  let ask = confirm("Haluatko jatkaa numeroiden antamista? (y/n)");
  if (ask === true) {
    console.log("jatketaan");
  } else if (ask === false) {
    console.log("ei? tämä kone tuhotaan");
    break;
  }
  num2 = Number(prompt("syötä numero"));


  let keksi = numeroita / num2;
  console.log("numeroitten keski arvo on:", keksi);
}

