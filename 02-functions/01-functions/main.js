//deklarace funkce
function pozdrav() {
    console.log('Ahoj');
    console.log('Jak se máš?');
    console.log('Co ty?');
}
// spuštění, zavolání funkce
pozdrav();

// vstupni parametry, uvádí se do kulatých závorek, libovolné množství, je to jako proměnná
function pozdrav(jmeno, pocetDni = 100) { // výchozí hodnota
    console.log(`Ahoj, ${jmeno}.`);
    console.log('Jak se máš?');
    console.log('Co ty?');
    console.log(`Už jsme se ${pocetDní}`)
}
//pozdrav('Alice', 14);
//pozdrav('Petr'); // pokud nezadám vlastní hodnotu, dosadí se tam výchozí tj 100

// parametry vs. argumenty
// parametry jsou proměnné v závorce u jména funkce
// argumenty jsou dosazené hodnoty do proměnné tj Alice, 14

// návratová hodnota
function soucet(a, b) {
    //console.log(`Součet je ${a + b}`)
    return a + b;
}

const x = soucet(2, 3);
console.log(x);

// return u slozitejsich funkci
function mesicniPocasi1(teplota) {
    return (teplota > 20 && teplota < 38 ? 'kraťasy' : 'skafandr');
}

function mesicniPocasi2(teplota) {
    if (teplota >= 20 && teplota <= 38) {
        return 'kraťasy';
    } else {
        return 'skafandr';
    }
}

function mesicniPocasi3(teplota) {
    if (teplota >= 20 && teplota <= 38) {
        return 'kraťasy';
    } 
    return 'skafandr'; // else nemusí být, stačí tam jen return
}
console.log(mesicniPocasi1(29));
console.log(mesicniPocasi2(29));
console.log(mesicniPocasi3(19));

function pristupDoKnihovny (jeClen, jeOtevreno) {
    if (!jeOtevreno) {
        console.log('není otevřeno');
        return;
    }
    if (!jeClen) {
        console.log('nejsi členem, nemáš přístup');
        return;
    }
    console.log('Jsi uvnitř, tady máš své knížky');
}

pristupDoKnihovny
// hoisting 

