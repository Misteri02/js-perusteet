//Tee ohjelma, joka tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä, esittäen ne seuraavalla tavalla
//2, 98, 4, 96, 6, 62 ja niin edelleen. Tulosta luvut samalle riville. 


function parilliset() {
    let s = "";
    for (let i=2; i <= 99; i+= 2) {
            s += i + ", ";
    }
    console.log(s.slice(0, -2));
}


parilliset();
