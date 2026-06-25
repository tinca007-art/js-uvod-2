/*
Květiny

Máte připravené následující pole s názvy květin (viz kód níže).

Projděte pole květin a zjistěte, která květina má nejkratší název a která nejdelší.

Názvy obou květin potom vypište do konzole nebo do stránky.
*/

const kvetiny = [
  'Růže',
  'Tulipán',
  'Konvalinka',
  'Mák',
  'Pampeliška',
  'Maceška',
  'Sedmikráska',
  'Hyacint',
  'Kosatec',
  'Levandule'
];
let nejdelsíSlovo = '';

for (let i = 0; i < kvetiny.length; i++) {
  if (kvetiny[i].length > nejdelsíSlovo.length) {
    nejdelsíSlovo = kvetiny[i];
  }
  }

console.log(nejdelsíSlovo);