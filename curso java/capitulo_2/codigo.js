const sumar = (num1,num2) =>{
    return parseInt(num1) + parseInt(num2)
}
const restar = (num1,num2) =>{
    return parseInt(num1) - parseInt(num2)
}
const dividir = (num1,num2) =>{
    return parseInt(num1) / parseInt(num2)
}
const multiplicar = (num1,num2) =>{
    return parseInt(num1) * parseInt(num2)
}

alert("Que Operacion deseas realizar?");
let operacion = prompt ("1:suma, 2:resta, 3:dividir, 4:multiplicar");

if (operacion == 1){
    let numero1 = prompt("primer numero:");
    let numero2 = prompt("segundo numero:");
    alert ("el resultado es: "+(sumar(numero1,numero2)));
} 
if (operacion == 2){
    let numero1 = prompt("primer numero:");
    let numero2 = prompt("segundo numero:");
    alert ("el resultado es: " + (restar(numero1,numero2)));
}
if (operacion == 3){
    let numero1 = prompt("primer numero:");
    let numero2 = prompt("segundo numero:");
    alert ("el resultado es: " + (dividir(numero1,numero2)));
}
if (operacion == 4){
    let numero1 = prompt("primer numero:");
    let numero2 = prompt("segundo numero:");
    alert ("el resultado es: "+(multiplicar(numero1,numero2)));
}