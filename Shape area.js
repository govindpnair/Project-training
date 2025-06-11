const op = parseInt(prompt("Enter the shape - 1.triangle, 2.square, 3.rectangle or 4.circle"));
let area=1;
switch(op)
{
    case(1):
    const base = parseFloat(prompt("Enter the base length "));
    const height = parseFloat(prompt("Enter the height length "));
    area = (base*height)/2;
    break;
    case(2):
    const side = parseFloat(prompt("Enter the side length of square: "));
    area = side**2;
    break;
    case (3):
    const l = parseFloat(prompt("Enter the length "));
    const b = parseFloat(prompt("Enter the breadth"));
    area = l*b;
    break;
    case (4):
    const rad = parseFloat(prompt("Enter the radius "));
    area = 3.14*(rad**2);
    break;
    default:
    console.log("Not possible");
    break;
}    
console.log("The area is " +area);