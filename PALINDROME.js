
let word = "Chicago";
function palindrome(name){
    let upperName = name.toUpperCase();
    for (let i=0;i<(upperName.length)/2;i++)
        if(upperName[i]==upperName[upperName.length-1])
        return 1;
        else
        break;
}
if(palindrome(word)==1)
    console.log("The word is palindrome");
else
    console.log("The word is not palindrome");
