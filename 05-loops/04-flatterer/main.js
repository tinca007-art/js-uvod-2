/*
Napište funkci `opakovat`, která bude jako parametry přijímat `text` a `pocet`. Funkce uvnitř použije cyklus `for` a daný text vypíše počet-krát do konzole.

Každý rád slyší svoje jméno, lichotí nám to. Mimo funkci `opakovat` se pomocí `prompt` zeptejte uživatele na jeho jméno a počet opakování.

Oba údaje předejte do funkce jako argumenty.

Tj. když zadáme `Alena` a `5`, tak se do konzole 5x vypíše `Alena`.
*/
const jmeno = prompt('Zadej své jméno');
const pocetOpakovani = Number(prompt('Zadej počet opakování'));

function opakováni(text, pocet) {
    for (let i = 0 ; i < pocetOpakovani ; i++) {
         if ( jmeno * pocetOpakovani[i]) {
            return jmeno * pocetOpakovani;
         }
}
}
const x = opakovani(jmeno * pocetOpakovani);

console.log(opakovani);