
/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `kirjasto`, joka edustaa kirjojen kokoelmaa.
Jokaisella kirjalla tulisi olla ominaisuudet `otsikko`, `kirjailija` ja `julkaisuvuosi`.
Lisää ainakin kaksi kirja-oliota tähän kokoelmaan.
*/
// Sinun koodisi tähän
let kirjasto = [
    kirja1 = {
    otsikko: "why",
    kirjailija: "murel",
    julkaisuvuosi: 2710,
    },
    book2 = {
    otsikko: "non",
    kirjailija: "jaakko",
    julkaisuvuosi: 1280,
    }
];
console.log(kirjasto);


/* Tehtävä 2
Käytä `kirjaston` ensimmäisen kirjan `otsikko`-ominaisuutta ja tulosta se konsoliin.
Muuta toisen kirjan `julkaisuvuotta` uuteen vuoteen kokoelmassa ja kirjaa päivitetty kirja-olio konsoliin.
*/
// Sinun koodisi tähän
console.log(kirja1.otsikko);
book2.julkaisuvuosi = 1995;
console.log(kirjasto);


/* Tehtävä 3
Käytä pistenotaatiota lisätäksesi uuden ominaisuuden `lajityypit` (merkkijonotaulukko) ensimmäiseen kirjaan `kirjasto`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-ominaisuuden `onSaatavilla` samaan kirjaan, ilmaisten sen saatavuuden.
*/
// Sinun koodisi tähän
kirja1.merkkijonotaulukko = "54";
console.log(kirja1.merkkijonotaulukko);

kirja1["onsaatavilla"] = "saatavilla";
console.log(kirja1["onsaatavilla"]);


/* Tehtävä 4
Määritä konstruktorifunktio nimeltä `Kirja`, joka voi luoda uusia kirja-olioita ominaisuuksilla `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit`.
Käyttäen `Kirja`-konstruktoria, luo uusi kirja-olio annetuilla syöttöarvoilla ja lisää se `kirjasto`-kokoelmaan.
*/
// Sinun koodisi tähän
function Person1(otsikko, kirjailija, julkaisuvuosi, lajityypit) {
    this.otsikko = otsikko;
    this.kirjailija = kirjailija;
    this.julkaisuvuosi = julkaisuvuosi;
    this.lajityypit = lajityypit;
  }
  const person1 = new Person1("Alice in wonderland", "kate", 3460, "grimdark");
  kirjasto.push(person1);
  console.log(kirjasto);


/* Tehtävä 5
Kirjoita funktio nimeltä `luoKirja`, joka ottaa parametrit `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit` (taulukko).
Funktion tulisi palauttaa uusi kirja-olio näillä ominaisuuksilla.
Testaa `luoKirja`-funktiota luomalla uusi kirja-olio käyttäjän antamilla syötteillä ja kirjaa uusi kirja-olio konsoliin.
*/
// Sinun koodisi tähän
function luoKirja(otsikko, kirjailija, julkaisuvuosi, lajityypit) {
  this.name = otsikko;
  this.age = kirjailija;
  this.julkaisuvuosi = julkaisuvuosi;
  this.lajityypit = lajityypit;
}
let myCat = new luoKirja("nerfas", "jukka", 5032, "comedy")
console.log(myCat)


/* Tehtävä 6
Muunna `kirjasto`-kokoelma JSON-merkkijonoksi ja kirjaa se konsoliin.
Tee JSON-merkkijonosta JavaScript-olio ja kirjaa ensimmäisen kirjan otsikko konsoliin.
*/
// Sinun koodisi tähän
const jsonMerkkijono = JSON.stringify(kirjasto);
console.log(jsonMerkkijono);

const jsonOlio = JSON.parse(jsonMerkkijono);
console.log(jsonOlio);
