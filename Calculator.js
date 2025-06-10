let result;
const num1 = parseFloat(prompt('Enter the first number: '))
const num2 = parseFloat(prompt('Enter the second number: '))
let op = prompt('Enter the operator - +/-/*//')
switch(op)
{
    case '+':
        result = num1+num2;
        console.log('The result is:'+result);
        document.body.innerHTML = `The result is:`+result;
        break;
    case '-':
         result = num1-num2;
        console.log('The result is:'+result);
        document.body.innerHTML = `The result is:`+result;
        break;
     case '*':
         result = num1*num2;
        console.log('The result is:'+result);
        document.body.innerHTML = `The result is:`+result;
        break;   
     case '/':
         result = num1/num2;
        console.log('The result is:'+result);
        document.body.innerHTML = `The result is:`+result;
        break;
    default:
        console.log('Undefined operator');
        document.body.innerHTML = 'Undefined operator';
        break;
}