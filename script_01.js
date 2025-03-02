
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}



/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die",
"Platt","von","dene","zwei","diwodaso","Spass",
"mache,","habbe","Sie","die"],"Q"));
output(getSentence(["Ne","hab","ich","ned"]));

function getSentence(arr,op) {
    const GAP = " "; 
    str = arr.join(GAP) + getPunctuation(op)

    return str;
}

function getPunctuation(op){
    switch (op) {
        case "Q":
        op = "?";
        break;
        case "E":
        op = "!";
        break;
        default:
        op = ".";
        break;
}

return op;
}

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}