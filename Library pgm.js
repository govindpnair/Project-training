let bookStatus = [{'Name':"1984", 'Author':"Orwell", 'Status': "Available"},
    {'Name':"Randamoozham", 'Author':"MT", 'Status': "Not Available"},
    {'Name':"Macbeth", 'Author':"Shakespeare", 'Status': "Available"}
]
let option = parseInt(prompt("Enter the desired function: 1. Availability, 2. Update Status of book, 3. Enter new book "));
switch(option)
{
    case 1:
        let name = prompt("Enter the name of the book ");
        let found = false;
        for (let book of bookStatus)
        if(book.Name.toLowerCase()==name.toLowerCase())
           { if(book.Status == 'Available')
           found = true;
                console.log("The book is available");}
            
        if(!found)
            console.log("The book is not in library. Please add the book through Option 3 ");
        break;
    case 2:
        let name2 = prompt("Enter the name of the book "); 
        let found1 = false;
        for (let book of bookStatus)
        if(book.Name.toLowerCase()==name2.toLowerCase())
           { if(book.Status === 'Available')
           found1 = true;
            let st = prompt("Do you wish to take the book? Y/N: ");
        if(st.toLowerCase()=='y')
        {
            if(book.Status === 'Available')
            {
                book.Status = 'Not Available';
            console.log("Successfull. Status updated");
                break;
            }
            else
            console.log("Book already out");}
        else
            console.log("Exit");}
            
        if(!found1)
            console.log("The book is not in library. Please add the book through Option 3 ");
        
        break;
    case 3:
        let name1 = prompt("Enter the name of the book ");
        for(let book of bookStatus)
            if(book.Name.toLowerCase() == name1.toLowerCase())
                console.log("Book already available");
            else
                {
                    let author = prompt("Enter the authors name: ");
                bookStatus.push({'Name': name1, 'Author': author, 'Status': 'Available'});
                console.log("Added successfully");
                console.log(bookStatus);
                break;
                }
            break;
    
    default:
    console.log("Invalid option");
    console.log(bookStatus);
    break;





}