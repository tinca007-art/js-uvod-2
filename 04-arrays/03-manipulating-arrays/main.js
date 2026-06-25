/*
Běžné polní práce

V kódu níže máte připravené pole jmen.

Proveďte úkoly v komentářích v kódu a po každém úkolu si vždy vypište pole do konzole, ať vidíte, co se s ním stalo.
*/

const jmena = [
  'Jana',
  'Emil',
  'Lenka',
  'Alena',
  'Karel',
  'Pavla'
];

// 1. Na konec pole přidejte jméno **Helena** a potom ještě **Arnošt**.
jmena.push('Helena', 'Arnost');
console.log(jmena);
// 2. Na začátek pole přidejte jméno **Kamila** a potom ještě **Libor**.
jmena.unshift('Kamila', 'Libor');
console.log(jmena);
// 3. Z konce pole odeberte jedno jméno a vypište do konzole, jaké jméno to bylo.
jmena.pop();
console.log(jmena);
// 4. Ze začátku pole odeberte jedno jméno a vypište do konzole, jaké jméno to bylo.
jmena.shift();
console.log(jmena);
// 5. Z prostředku pole odstraňte čtvrté jméno.
jmena.splice(2, 1);
// 6. Třetí jméno v poli nahraďte za dvě jména **Lucie** a **Hana**.
jmena.splice(2, 1, 'Lucie', 'Hana');
// 7. Vypište do konzole, zda se v poli nachází jméno **Karel**. Zkuste to stejné i pro jméno **Lucie**.
console.log(jmena.includes('Lucie'));
// 8. Najděte, na jakém indexu v pole je **Alena**, a vypište to do konzole.
console.log(jmena.indexOf('Alena'));
// 9. Najděte na jaké pozici v poli je **Emil** a z pole ho smažte. Vyzkoušejte, zda vše v pořádku funguje, i když to zkusíte se jménem, které v poli neexistuje, např. **Eva**.
console.log(jmena.indexOf('Emil'));
// 10. Doplňte předchozí bod o podmínku, která:
//     - když je jméno nalezeno, tak se z pole odebere
//     - když pole ve jménu není, vypíše se do konzole chyba `'Jméno nenalezeno'`