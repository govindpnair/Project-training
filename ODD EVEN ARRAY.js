let orgArray = [5,6,7,8,12,15,17];
let evenArray = [];
let oddArray = [];
for (let i=0; i<orgArray.length; i++)
{
        if (orgArray[i]%2===0)
        evenArray.push(orgArray[i]);
        else
        oddArray.push(orgArray[i]);
}
console.log(orgArray);
console.log(evenArray);
console.log(oddArray);