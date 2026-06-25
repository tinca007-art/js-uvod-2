/*
Přestupný rok

BONUS cvičení na zavaření 🧠

Napište funkci, která jako parametr přijme rok a vrátí true nebo false podle toho, zda je zadaný rok přestupný.

Přestupný rok je dělitelný číslem 4. Roky dělitelné číslem 100 jsou ale přestupné jen tehdy, pokud jsou zároveň dělitelné číslem 400.
*/

function prestupnyRok(rok) {
if (rok % 4 === 0) {
    return true;
} else if (rok % 100 ===0 && rok % 400 === 0) {
    return true;
}
    return false;
}
console.log( prestupnyRok(1950));
