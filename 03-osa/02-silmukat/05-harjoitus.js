// Kehitä ohjelma, joka jatkaa käyttäjän pyytämistä syöttämään numeroita, kunnes käyttäjä syöttää 0. 
// Tässä vaiheessa ohjelma lopettaa toimintansa. 
// Lopetettuaan ohjelman tulisi laskea ja näyttää kaikkien syötettyjen numeroiden keskiarvo


let numeroita, num;

while (numeroita !== 0) {
  numeroita = Number(prompt("syötä numeroita"));

  if (numeroita === 0) {
    console.log("0 havaittu tämä kone tuhotaan");
    break;
  }

  num = Number(prompt("feed the machine"));
  let keksi = num / numeroita;
  console.log("numeroitten keski arvo on:", keksi);
}

