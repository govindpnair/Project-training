let string = 'identity'
let count = 0
let elem = []
elem = Array.from(string);
for (let i=0; i<elem.length;i++)
{
    if(elem[i]=='A'||elem[i]=='E'||elem[i]=='I'||elem[i]=='O'||elem[i]=='U'||elem[i]=='a'||elem[i]=='e'||elem[i]=='i'||elem[i]=='o'||elem[i]=='u')
    count++
}
let value =0;
for(let alpha of string)
{
    if("AEIOUaeiou".includes(alpha))
    value++
}
console.log(count)
console.log(value)
