/*
Zaměstnanci

Vytvořte objekt firma, který bude mít vlastnosti nazev, rokZalozeni, a zamestnanci.

Vlastnost zamestnanci uvnitř objektu je pole osob. Každá osoba je znovu objekt, který má vlastnosti jmeno, prijmeni a pozice. Vytvořte alespoň 3 zaměstnance.

Do konzole vypište jméno, příjmení a pozici druhého zaměstnance ve firmě.
*/

const firma = {   
    nazev: 'CopyPartner satisfies.r.o.',
    rokZalozeni: 1999,
    zamestnanci: [    
        {jmeno: 'Alena', prijmeni: 'Nováková', pozice: 'ředitelka'},
        {jmeno: 'Petr', prijmeni: 'Nový', pozice: 'manažer'},
        {jmeno: 'Pavel', prijmeni: 'Novotný', pozice: 'IT specialista'},
    ]
}

console.log(firma.zamestnanci[1]);
