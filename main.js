// Pro výpis do stránky můžeš použít funkci vypisText('text');
// Její kód je přiložen na konci tohoto souboru.
// Nebo můžeš pomocí console.log('text'); vypisovat do konzole prohlížeče.


// Úkol 1 - Založ nové pole se seznamem jmen (alespoň 5)
// Vypiš jeho obsah do stránky - JavaScript spojí pole automaticky do řetězce

let pole = ['Zuzana', 'Jana', "Marcela", 'Pavla', 'Kamila'];
let text1 = document.querySelector('#vystup1');
text1.textContent = pole;

// Úkol 2 - Vypiš třetí jméno v pořadí
// Nezapomeň, že pole se čísluje od 0

let text2 = document.querySelector('#vystup2');
text2.textContent = pole[2];

// Úkol 3 - Kolik jmen je v poli?
// Pole má vlastnost pole.length

let text3 = document.querySelector('#vystup3');
text3.textContent = pole.length;

// Úkol 4 - Vypiš znovu seznam jmen, ALE...
// Tentokrát použij cyklus .forEach() a před každé jméno přidej
// číslo indexu, na kterém se jméno nachází
// 0. Alena
// 1. Jana
// 2. Marie
// atd.

let text4 = document.querySelector('#vystup4');
pole.forEach(function(ele, idx, arr) {
    console.log = ((idx + 1) + " " + ele)
});


// Úkol 5 - přidej na konec pole další jméno
// pole.push()
// pole.unshift()
// Doplněný seznam jmen vypiš (jednoduše jako v příkladu 1)

let text5 = document.querySelector('#vystup5');
pole.push("Klara");
text5.textContent = pole;



// Úkol 6 - odeber z pole první a poslední jméno a vypiš
// obě jména a pak i výsledné pole
// pole.shift()
// pole.pop()

let text6 = document.querySelector('#vystup6');
let prvni = pole.shift();
let posledni = pole.pop();
text6.textContent = 'prvni vymazane jmeno je ' + prvni + " posledni vymazane jmeno je " +
    posledni;

let text7 = document.querySelector('#vystup7');
text7.textContent = pole



// *********************************************
function vypisText(txt) {
    document.querySelector('#vystup').innerText += txt + '\n';
}