/*
Řady čísel

Použijte cyklus `for` a vypište do konzole postupně řady čísel (nový cyklus pro každou řadu, ne vše v jednom 🙂)

- řada čísel od 1 do 10
- řada čísel od 13 do 21
- sestupná řada čísel od 10 do 5
- řada sudých čísel od 0 do 30 (tj. 0, 2, 4, 6 …)
*/

for (let i = 1 ; i < 11 ; i++) {
    console.log(i);
}

for (let i = 13 ; i < 22 ; i++) {
    console.log(i);
}

for (let i = 10 ; i > 4 ; i--) {
    console.log(i);
}

for (let i = 0 ; i < 32 ; i = i + 2) {
    console.log(i);
}