/*
- Luo muuttuja nimeltä 'num1' ja anna sille liukulukuarvo.
- Luo muuttuja nimeltä 'num2' ja anna sille eri liukulukuarvo.

- Pyöristä sekä 'num1' että 'num2' lähimpään kokonaislukuun ja tallenna tulokset muuttujiin 'roundedNum1' ja 'roundedNum2'.
- Laske neliöjuuri 'roundedNum1':stä ja tallenna se muuttujaan nimeltä 'sqrtNum1'.
- Etsi suurempi numero 'roundedNum1':n ja 'roundedNum2':n välillä ja tallenna se muuttujaan nimeltä 'maxNum'.

- Käytä console.log() -funktiota tulostamaan 'roundedNum1', 'roundedNum2', 'sqrtNum1' ja 'maxNum' konsoliin.
- Käytä typeof operaattoria tarkistaaksesi jokaisen uuden muuttujan tietotyypin ja tulosta tulos käyttäen console.log().
*/

let num1 = 3.9694;
let num2 = 2.592;

//pyöristää
let roundedNum1 = Math.round(num1);
let roundedNum2 = Math.round(num2);

console.log(roundedNum1);
console.log(roundedNum2);
console.log(typeof roundedNum1);
console.log(typeof roundedNum2);

//laskee neliöjuuren
let sqrtNum1 = roundedNum1 ** 2;
let sqrtNum2 = roundedNum2 ** 2;

console.log(sqrtNum1);
console.log(sqrtNum2);
console.log(typeof sqrtNum1);
console.log(typeof sqrtNum2);

//etsii suurimman numeron
let maxNum = Math.max(roundedNum1, roundedNum2);
let maxsqrt = Math.max(sqrtNum1, sqrtNum2);

console.log(maxNum);
console.log(maxsqrt);
console.log(typeof maxNum);
console.log(typeof maxsqrt);
