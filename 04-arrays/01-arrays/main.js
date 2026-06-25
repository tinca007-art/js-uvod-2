// co je pole
// index a přístup k prvkům pole pomocí indexu
// počet prvků v poli
// prázdné pole
// míchání datových typů v poli - lze, ale obvykle se nedělá
// metody pole:
// - přidání prvku do pole: push, unshift
// - odebrání prvku z pole: pop, shift
// - přidání, nahrazení uprostřed: splice
// - hledání v poli: includes, indexOf


const cisla = [7, 13, 24, 475, 3];
const kocky = ['Mica', 'Mourek', 'Flicek', 'Evzen'];
const mix = ['Alena', 25, true, 'Brno', null];

console.log(kocky.length);
console.log(kocky[1]);
kocky[3] = 'Karel';
console.log(kocky);

kocky.push('Fousek'); // přidání na konec
kocky.unshift('Bobina');// přidání na začátek
kocky.pop(); // odebrání z konce
kocky.shift(); // odebrání ze začátku

// přidat, odebrat, nahradit cokoliv kdekoliv v poli
// od indexu 2 smažu 1 prvek tj. Flicek
 kocky.splice(2, 1);

// od indexu 2 smažu 1 prvek a místo toho vložím x dalších
 kocky.splice(2, 1, 'Ringo', 'Bella'); // tj. Flicek nahrazený za Ringo a Bella

// od indexu 2 smažu 0 prvků a místo toho vložím x dalších
// tj. vložení doprostřed pole
kocky.splice(2, 0, 'Amalka', 'Yoko', 'Masa');

// zjistí jestli je v poli
console.log(kocky.includes('Mourek')); 

// zjistí na kterém indexu je
console.log(kocky.indexOf('Mourek'));