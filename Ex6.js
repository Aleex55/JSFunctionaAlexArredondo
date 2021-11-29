function suma(num1, num2, num3) {
    var result = num1 + num2 + num3;
    document.getElementById("resultado").innerHTML = result;
}
var num1 = Number(prompt("Introdueix el numero 1:"));
var num2 = Number(prompt("Introdueix el numero 2:"));
var num3 = Number(prompt("Introdueix el numero 3:"));
suma(num1, num2, num3);