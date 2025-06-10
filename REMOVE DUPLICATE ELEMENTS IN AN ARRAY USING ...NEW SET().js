function uniqArr(arr)
{
    let uniqueArray = [...new Set(arr)];
    console.log(uniqueArray);
}
const Array = [1, 2, 3, 2, 3, 5, 5, 4, 4];
uniqArr(Array);