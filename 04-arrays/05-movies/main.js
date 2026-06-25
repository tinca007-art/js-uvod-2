/*
Oblíbené filmy

Ve cvičení na objekty jsme vytvářeli objekt s oblíbeným filmem. Objekt jednoho filmu měl vlastnosti  nazev, rokVydani, zanr, a reziser. Chcete mít více oblíbených filmů, ne jenom jeden (alespoň 3).

- Vytvořte pole filmů. Každý film je objekt se zmíněnými vlastnostmi.
- Vypište do konzole název a žánr prvního filmu v poli.
- Vypište do konzole řežiséra druhého filmu v poli.
- Vypište do konzole rok vydání třetího filmu v poli.

Pokud se ti nechtějí hledat údaje o tvých oblíbených filmech, můžeš použít tyto:

- Čelisti, 1975, thriller, Steven Spielberg
- Toy Story, 1995, animovaný, John Lasseter
- Memento, 2000, thriller, Christopher Nolan
- Star Wars: New Hope, 1977, sci-fi, George Lucas

*/

const oblibenyFilm = [
    {nazev: 'Čelisti',rokVydani: '1975', zanr: 'thriller', reziser: 'Steven Spielberg'},
    {nazev: 'Toy Story', rokVydani: 1995, zanr: 'animovaný', reziser: 'John Lasseter'},
    {nazev: 'Memento', rokVydani: 2000, zanr: 'thriller', reziser: 'Christopher Nolan'},
]
console.log(oblibenyFilm[ 0 ].nazev);
console.log(oblibenyFilm[1].reziser);
console.log(oblibenyFilm[2].rokVydani);

