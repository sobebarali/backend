const crypto = require('crypto');

let operation = process.argv[2];
let num1 = process.argv[3];
let num2 = process.argv[4];


const calculator = (operation,num1,num2) =>{
    if(operation == 'add'){
        let sum = Number(num1)+Number(num2);
        return sum;
    }else if(operation == 'sub'){
        return num1 - num2;
    }else if(operation == 'mult'){
        return num1 * num2;
    }else if(operation == 'divide'){
        return num1 / num2;
    }else if(operation == 'sin'){
        return Math.sin(num1 * (Math.PI / 180)); 
    }else if(operation == 'cos'){
        return Math.cos(num1 * (Math.PI / 180)); 
    }else if(operation == 'tan'){
        return Math.tan(num1 * (Math.PI / 180)); 
    }else if(operation == 'random'){
        let randomNumber = crypto.randomInt(0,100);
        return randomNumber;
    }else{
        return null;
    }
}


console.log(calculator(operation,num1,num2));
