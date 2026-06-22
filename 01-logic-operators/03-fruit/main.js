/*
Ovoce 🍉

Moje oblíbené ovoce je jahoda, meloun nebo hruška.

Nechte uživatele pomocí prompt() zadat, jaké ovoce mi nabízí (zadá např. “borůvky”).

Do konzole vypište, zda se trefil do mého oblíbeného ovoce (tj. zjistěte,  zda zadané ovoce je jahoda, meloun nebo hruška).
*/

const ovoce = prompt('Zadej nabídku ovoce');

if (ovoce === 'jahoda' || ovoce === 'meloun' || ovoce === 'hruška') {
    console.log('To je moje oblíbené ovoce');
} else {
    console.log('To není moje oblíbené ovoce');
}