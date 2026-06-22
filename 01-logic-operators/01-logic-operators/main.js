// operator && a zároveň
const vek = 25;
if (vek > 20 && vek < 30) {
console.log('Je ti 21 - 29');
} else {
    console.log('Není ti 21 - 29');
}

// operator || nebo
const barva = 'zelená'
if (barva === 'zelená' || barva === 'modrá') {
    console.log('To je moje oblíbená barva');
} else {
    console.log('Tohle není moje oblíbená barva');
}
// kombinace operátorů
if (vek > 20 && (barva === 'zelená' || barva === 'modrá')) {
    console.log('Je ti víc než dvacet');
} else {
    console.log('Není ti přes dvacet');
}

// operator ! negace
if ( !(vek > 20 && vek < 30)) {
    console.log();
} else {
    console.log();
}// ! opak výrazu, tzn.vek je menší než 20 a větší než 30

// jmena boolean proměnných s is, has


