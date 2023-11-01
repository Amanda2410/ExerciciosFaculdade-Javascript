/*Escreva um programa que informe qual é maior -> 7 ou 10 */
function mostrar() {

    var num1 = 7;
    var num2 = 10;
    
    if (num1 > num2) {
        document.getElementById("result").innerHTML = (num1 + " é o maior número.");
    } else if (num2 > num1) {
        document.getElementById("result").innerHTML = (num2 + " é o maior número.");
    }
    }