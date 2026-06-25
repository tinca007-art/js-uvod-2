/*
Vytvořte objekt, který bude uchovávat údaje o osobě.

Kontaktní údaje mohou být dvojího druhu: domů a do práce. Adresa domů je jiná, než adresa do práce, a to stejné může platit pro telefonní čísla nebo emaily.

Vytvořte objekt s názvem kontakt, který bude obsahovat vlastnosti jmeno, prijmeni, datumNarozeni a vlastnosti domov a zamestnani.

- vlastnost domov má jako hodnotu vnořený objekt, který obsahuje vlastnosti adresa, telefon a email. Adresa je znovu vnořený objekt, který obsahuje vlastnosti ulice, cislo, mesto a psc.

- vlastnost zamestnani je vnořený objekt, který obsahuje vlastnosti firma, pozice, adresa, telefon a email. Adresa je znovu objekt, stejný jako u domácí adresy.
*/

const kontakt = {
    jmeno: 'Katka',
    prijmeni: 'Novakova',
    datumNarozeni: '12.4.1985',
    domu: {
        adresa: 'Prazska 7',
        telefon: 123456789,
        email: 'novakovaK@seznam.cz',
    },
    zamestnani: {
        firma: 'CZ sro', 
        pozice: 'manazerka', 
        adresa: 'u Reky 12', 
        telefon: 789456123, 
        email: 'novakovaCZ@gmail.com',
    },
}
console.log(kontakt);