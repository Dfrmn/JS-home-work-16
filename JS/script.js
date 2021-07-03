function mainFunc(callback){
    let num1 = +prompt(`Enter first number`);
    let num2 = +prompt(`Enter second number`);
    return callback(num1 , num2);
}

function exponentiation(num1 , num2) {
    let result = Math.pow(num1 , num2);
    return result;
}

function multiplay(num1 , num2) {
    let result = num1 * num2;
    return result;    
}

function division(num1 , num2) {
    let result = num1 / num2;
    return result;    
}

function modul(num1 , num2) {
    let result = num1 % num2;
    return result;    
}

alert(mainFunc(exponentiation));
alert(mainFunc(multiplay));
alert(mainFunc(division));
alert(mainFunc(modul));