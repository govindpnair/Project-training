//create new arrays for student names and marks
let students = [
    {name: "Govind", marks:80},
    {name: "Anand", marks:70},
    {name:"Raman", marks:90},
    {name:"Razik", marks:80},
    {name:"Athul", marks:70}
]

let choice = parseInt(prompt("Enter your choice:\n 1. Display student details \n 2. Add new student \n 3. Remove student \n 4. Update score \n 5. Sort data\n"))
switch(choice)
{
    case 1:
        displayDetails();
        break;
    case 2:
        addNewStudent();
        break;
    case 3:
        removeStudent();
        break;
    case 4:
        updateScore();
        break;
    case 5:
        sortStudent();
        break;
    default:
        console.log("Invalid option")    
        break;
}
function displayDetails()
{
    console.log("Student details:")
    for(let stud of students)
    {
        console.log("The student named "+stud.name+" scored "+stud.marks+" marks")
    }
}

function addNewStudent()
{
    let newName = prompt("Enter the name of the new student ")
    let newMarks = parseInt(prompt("Enter the marks of the new student "))
    students.push({name:newName,marks:newMarks})
    displayDetails();
}

function removeStudent()
{
    let n = prompt("Enter the name of the student whose details needs to be deleted ")
    let index = students.findIndex(stud => stud.name.toLowerCase() === n.toLowerCase())
    if(index!==-1)
        students.splice(index,1)
    else
        console.log("Name not found")
    displayDetails();
}

function updateScore()
{
    let n = prompt("Enter the name of the student whose marks needs to be updated ")
    let newMarks = prompt("Enter the new marks ")
    for(let stud of students)
    {
       if(n.toLowerCase()==stud.name.toLowerCase())
        {
            stud.marks = newMarks
            break;
        } 
        else
        console.log("Student not found") 
    }
    displayDetails();
}

function sortStudent()
{
    let s = parseInt(prompt("How to sort? \n1. Name \n2. Marks \n"))
    switch(s)
    {
        case 1:
            students.sort((a,b) => a.name.localeCompare(b.name))
            break;
        case 2:
            students.sort((a,b) => b.marks-a.marks)
            break;
        default:
            console.log("Invalid choice ")
            break;
    }
    displayDetails();
}
