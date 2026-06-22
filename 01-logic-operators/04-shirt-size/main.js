/*
Velikost trička

Nechte uživatele zadat pomocí prompt() velikost trička (zadá jednu z velikostí XS, S, M, L, XL).

Do konzole vypište, zda je tričko skladem nebo ho musíme objednat.
Bohužel nemáme skladem velikosti S a M.

BONUS: vyřešte, aby program fungoval, ať uživatel zadá velikost libovolnou velikostí písmen.
*/

const velikost = prompt('Zadej velikost trička(XS, S, M, L, XL)');
if (velikost === 'S' || velikost === 'M') {
    console.log('Bohužel nemáme skladem');
} else {
    console.log('Je skladem');
}
