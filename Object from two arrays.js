const a1 = ['names', 'age', 'city'];
const a2 = ['Manu' , 20, 'TVM'];
const obj = Object.fromEntries(a1.map((key,index)=>[key , a2[index]]));
console.log(obj);