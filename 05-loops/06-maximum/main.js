/*
Maximum

Máte následující pole čísel (viz kód níže).

Pomocí cyklu `for` čísla projděte a nalezněte to největší z nich.
Na konci ho vypište do konzole nebo do stránky.
*/

const cisla = [23, 67, 89, 45, 12, 34, 92, 75, 56, 18];
let nejvetsiCislo = cisla[0];

for (let i = 1; i < cisla.length; i++) {
    if (cisla[i] > nejvetsiCislo) {
        nejvetsiCislo = cisla[i];
    }
}
console.log(nejvetsiCislo);