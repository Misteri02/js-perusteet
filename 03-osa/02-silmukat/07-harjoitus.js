//Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä 
//tulostaa pienimmän ja suurimman numeron.


let summa = 0;
let lukujenmaara = 0;
let maxluku= Infinity;
let minluku= Infinity;


for(let i = 0; 1 < 5; i++){
    let syote = Number(prompt("anna lukuja"))
    
    if(isNaN(syote)){
        console.log(syote)
    } else {
        summa += syote
        lukujenmaara ++
        console.log("summa  nyt: ", summa)
        console.log("lukujen määrä: ", lukujenmaara)

        if(syote > maxluku){
            maxluku = syote
        }

        if(syote < minluku){
            minluku = syote
        }
    }
}


let keskiarvo = summa / lukujenmaara;
console.log("lukujen summa: ", summa)
console.log("lukujen keskiarvo: ", keskiarvo)
console.log("isoin luku on: ", maxluku)
console.log("pienin luku on: ", minluku)
