// cyklus for -> když chci něco automaticky vícekrát opakovat
// i = i + 1 > 1 i++
for (let i = 0 ; i < 3 ; i++) { // počítadlo kolikrát se má opakovat
    console.log(`Ahoj ${i}x`);

}

for ( let i = 10 ; i > 0 ; i--) { // od desíti do jedné
     console.log(`Ahoj ${i}x`);
    }

    const jmena = ['Alena', 'Jan', 'Petra', 'Karel', 'Olga'];

    jmena[0].toUpperCase()

for (let i = 0 ; i < jmena.length ; i++) {
    console.log(jmena[i].toUpperCase()); // tak převede všechny prvky na velká písmena
}
// když chci všechna čísla sečíst
const cisla = [1, 2, 3, 4, 5]
let soucet = 0; // pořád se bude měnit hodnota proto ne const ale let
for (let i = 0 ; i < cisla.length ; i++) {
    soucet = soucet + cisla[i]
}
