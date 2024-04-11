/** Harjoitus: Kolmion pinta-ala
 * Tee funktio nimeltä laskeKolmionPintaala, joka ottaa kaksi parametria: kannanPituus ja korkeus.
 * Funktio laskee annetun kolmion pinta-alan kaavalla kannanPituus * korkeus / 2  ja palauttaa sen.
 * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin. 
 * Voit käyttää joko nuolifunktiota tai tavallista funktiota*/

function laskeKolmionPintaala(kannanPituus, korkeus) {
    let pinta_ala = kannanPituus * korkeus / 2;
    return pinta_ala;
}


let kannanPituus = 5;
let korkeus = 3;
let tulos = laskeKolmionPintaala(kannanPituus, korkeus);
console.log("Kolmion pinta-ala", kannanPituus, korkeus, "on:", tulos);
