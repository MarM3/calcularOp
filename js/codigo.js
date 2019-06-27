function validarNumero(campo){
    var patron = /^[0-9]*$/;

    if (!patron.test(campo)){
        return false;
    }
}

function multiplica(){
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    document.getElementById("resultado").innerHTML = num1 * num2;
}

function divide(){
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    document.getElementById("resultado").innerHTML = num1 / num2;
}

var mult = document.getElementById("multiplicar");
mult.onclick = multiplica;
var div = document.getElementById("dividir");
div.onclick = divide;