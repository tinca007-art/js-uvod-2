/*
Přístup do knihovny

Vytvořte dvě proměnné. V jedné bude uloženo, zda má uživatel členskou kartičku do knihovny. Ve druhé bude uloženo, zda je knihovna právě otevřená nebo ne. Obě proměnné jsou typu boolean (true/false).

Má-li uživatel kartičku a knihovna je zrovna otevřená, napište do konzole “Přístup povolen”. Jinak napište “Přístup nepovolen”.

**Bonus:** Pod “Přístup nepovolen” napište i důvod, proč uživatel do knihovny nemůže. Není členem nebo knihovna není otevřená?
*/

const clen = true;
const otevreno = true;

if (clen && otevreno) {
    console.log('Přístup povolen');
} else {
    console.log('Přístup nepovolen');
if (!clen) {
    console.log('Nemáš členskou kartičku');
}
if (!otevreno) {
    console.log('Knihovna je zavřená');
}
}
