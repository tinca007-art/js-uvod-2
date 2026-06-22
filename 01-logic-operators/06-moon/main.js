/*
Pobyt na měsíci 🌖

Představte si, že žijete na Měsíci.

Teploty se tam běžně pohybují od -173°C do +127°C.

Než vylezete z domu, zeptejte se uživatele pomocí prompt(), jaká je venku teplota.

Do konzole vypište, zda je venku teplota vhodná na kraťasy a tričko s krátkým rukávem, tj. teplota mezi 20°C a 38°C. Jinak je potřeba skafandr.
*/

const teplota = prompt('Zadej teplotu na Měsíci');

if (teplota > 20 && teplota < 38) {
    console.log('Obleč si tričko a kraťasy');
} else {
    console.log('Obleč si skafandr');
}

// nebo pomocí ternárního operátoru
console.log(`Venku jr ${teplota} stupňů. Obleč si ${teplota >= 20 && teplota <= 38 ? 'tričko a kraťasy' : 'skafandr'}`);