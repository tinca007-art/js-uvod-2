// objekty v poli
// pole v objektu

const osoba = [ // pole
{ jmeno: 'Alena', vek: 27 }, // objekt
{ jmeno: 'Petr', vek: 34 },  // objekt
{ jmeno: 'Kamila', vek: 23 }, // objekt
{ jmeno: 'Jana', vek: 39 },  // objekt
];

console.log(osoba[1]);  // na indexu 1 tj. Petr
console.log(osoba[1].jmeno); // vlastnost objektu Petr

const os = osoby[2];  // uložený objekt Kamila do proměnné
console.log(os.jmeno);
console.log(os.vek);

const student = {
    jmeno: 'Jan',
    prijmeni: 'Vomacka',
    rocnik: 3,
    predmety: ['matika', 'fyzika', 'anglictina'],
}

console.log(student.predmety.length);
console.log(student.predmety[1]);