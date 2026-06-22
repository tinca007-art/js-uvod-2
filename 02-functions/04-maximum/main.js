/*
Maximum ze dvou čísel

Napište funkci s názvem max2, která přijímá dva parametry.
Jako výsledek funkce vrátí větší ze dvou zadaných čísel.
Pokud jsou si obě čísla rovna, vrátí se libovolné z nich.

Např. při zavolání max2(7, 13) funkce vrátí hodnotu 13. Volání  max2(4, 4) vrátí 4.

Pro účely příkladu předstírejme, že nevíme, že v JavaScriptu už existuje funkce Math.max(), která dělá to samé. Naprogramujte vlastní funkci, která porovná dvě čísla a vrátí to větší z nich.
*/

function max2(a, b) {
if (a > b) {
    return a;
}
    return b;
}
max2(7, 13);