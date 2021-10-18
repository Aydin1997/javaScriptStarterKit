//JS is not type safe!!
console.log("Merhaba Kodlama.io")
//console.log ile browswer console'da çıktı alırız.

//Değişken Tanımlama yapılırken 'var' anahtar kelimesi yerine *'let' anahtar kelimesi kullanılır.
let dolarBugun= 9.30;
let dolarDun=9.20;

{
    let dolarDun=9.10;
}
console.log(dolarDun)

//Const = Sabit demektir.

const euroDun=11.2 // const ile tanımladığımız için tekrardan bir tanımlama yaparsak hata alırız. 
//euroDun=11 

console.log(euroDun)

// Array=>Dizi demektir.
// camelCase
// PascalCase

let konutKredileri=["Konut kredisi","Emlak konut kredisi","Kamu konut kredisi"]

for(let i=0; i<konutKredileri.length; i++){
    console.log(konutKredileri[i])
}

