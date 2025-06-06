let string = 'identity'
let count = 0

let value =0;
for(let alpha of string)
{
    if("AEIOUaeiou".includes(alpha))
    value++
}

console.log(value)
