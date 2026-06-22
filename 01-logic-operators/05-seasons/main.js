/*
Roční období ❄

Nechte uživatele zadat číslo měsíce 1-12.

Do konzole vypište, o jaké roční období se jedná (jaro, léto, podzim, zima).
*/

const mesic = prompt('Zadej číslo měsíce (1-12)');

if (mesic >= 3 && mesic < 6) {
    console.log('Je jaro');
} else if (mesic >=6 && mesic < 9) {
    console.log('Je léto');
} else if (mesic >= 9 && mesic < 12) {
    console.log('Je podzim');
} else if (mesic >= 12 && mesic < 3) {
    console.log('Je zima');
}