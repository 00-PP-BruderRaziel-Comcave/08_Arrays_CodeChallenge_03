
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}

// Aufgabe: Satzausgabe mit korrektem Satzzeichen


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die",
"Platt","von","dene","zwei","diwodaso","Spass",
"mache,","habbe","Sie","die"],"Q"));

function getSentence(arr,op) {
    const GAP = " ";
    const PUNCT = ".";  // Fall: S
    const QEST = "?";   // Fall: Q
    const EXC = "!";    // Falol:E
    if (op = S) {
        arr.join(GAP) + PUNCT;
    }
    switch

    return arr;
}



// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}