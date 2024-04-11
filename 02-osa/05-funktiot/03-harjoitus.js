/** Harjoitus: Neliön pinta-ala
 * Tee funktio nimeltä laskeNelionPintaala, joka ottaa yhden parametrin: sivunPituus.
 * Funktio laskee annetun neliön pinta-alan kaavalla sivunPituus * sivunPituus ja palauttaa sen.
 * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin. 
 * Voit käyttää joko nuolifunktiota tai tavallista funktiota*/

function laskeNelionPintaala(sivunPituus) {
    let pinta_ala = sivunPituus * sivunPituus;
    return pinta_ala;
}


let sivunPituus = 5;
let tulos = laskeNelionPintaala(sivunPituus);
console.log("Neliön pinta-ala sivun pituudella", sivunPituus, "on:", tulos);
