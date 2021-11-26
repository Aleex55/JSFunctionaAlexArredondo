function vocalCount (palabro) {
    var count = palabro.match(/[aeiou]/gi).length;
    return count;
}
var palabra = prompt("String:");
var result = vocalCount(palabra);
document.write("Numero vocals = " + result);