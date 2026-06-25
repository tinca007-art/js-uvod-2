// co je objekt
// vlastnosti objektu vs. samostatne promenne
// teckova notace

const jmeno = 'Alena';
const prijmeni = 'Novakova';
const vek = 27;
const ulice = 'Poulicní 5';
const mesto = 'Mestecko nad Rekou';
const psc ='123 456';

const osoba = {
   // vlastnost : hodnota,
   // jinaVlastnost : hodnota,
    jmeno : 'Alena',
    prijmeni : 'Novakova',
    vek : 27,
    adresa: {   // vnorene objekty
        ulice: 'Poulicni 5',
        mesto: 'Mestecko nad Rekou',
        psc: '123 456',
    }
}

osoba.vek = 29; // může se přenastavit nějaká vlastnost

console.log(osoba);

console.log(osoba.prijmeni);
console.log(osoba.adresa.mesto);

const auto = {
    znacka: 'Skoda',
    model: 'Octavia',
    barva: 'cervena',
    rokVyroby: 2024,
    motor: {
        pocetValcu: 4,
        objemMotoru: 1600,
        palivo: 'benzin',
    },
    pocetNajetychKm: 24789,
}


// pridavani vlastnosti
osoba.barvaVlasu = 'blond';

// mazani vlastnosti
delete osoba.jmeno;

