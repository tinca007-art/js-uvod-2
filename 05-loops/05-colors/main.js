/*
Barvy

Máte připravené následující pole barev (viz kód níže).

Použijte cyklus `for` a vypište postupně všechny barvy do konzole.
U modré barvy napište navíc ještě 'modrá je nejkrásnější barva'.
*/

const barvy = ['červená', 'zelená', 'modrá', 'oranžová', 'fialová'];

for (let i = 0; i < barvy.length; i++) {
    barvy[2] = 'modrá je nejkrásnější barva';
    console.log(barvy[i]);
}
