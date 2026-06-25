/*
Vybíravý jedlík

Vytvořte pole, ve kterém budou názvy jídel, která nemáte rádi a skoro nikdy je nejíte (alespoň 4).

- Vypište do konzole počet jídel, která vám nechutnají (tj. délku pole).
- Vypište do konzole druhé jídlo v seznamu.
- Vypište do konzole **poslední** jídlo v seznamu, ale nepište přímo číslo indexu posledního prvku. Tj. nepište jidla[3], i když víte, že máte v seznamu 4 jídla. Místo toho použijte vlastnost length ke zjištění, jaký index má poslední prvek v poli. Tak bude kód stále fungovat, i když později do seznamu přidáte další jídlo (vyzkoušejte).
*/

const jidlo = ['houby', 'brokolice', 'kureNaPaprice', 'krupicovaKase'];
console.log(jidlo.length);
console.log(jidlo[1]);
console.log(jidlo[3]);
jidlo.splice(2, 0, 'hrach');
console.log(jidlo);
