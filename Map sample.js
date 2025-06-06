const myMap = new Map();
myMap.set('name', 'Govi')
myMap.set('age', 28)
myMap.set('EmpId', 15)
myMap.set('Stn', 'MTMY')
console.log(myMap)
console.log(myMap.get('Stn'))
myMap.delete('EmpId')
console.log(myMap)