function sortName(a,b)
{
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();
    let compare = 0;
    if(name1>name2)
        compare = 1;
    else if(name1<name2)
        compare = -1;
    return compare;
}
const students = [{name:'Govind', age: 28},{name:'Bose', age: 30},{name:'Lokesh', age:33},{name:'Manu', age:20}];
console.log(students.sort(sortName));