 console.log("this is index.js");


//constructor
function Book(Name, Author, Type)
{
this.Name=Name;
this.Author=Author;
this.Type=Type;
}


//display constructor
function Display() {

}

//add method to dosplay prototype
Display.prototype.add=function(book){
    console.log("Adding to ui");
    tablebody=document.getElementById("tablebody");
    let uiString= `<tr>
                  <td>${book.Name}</td>
                  <td>${book.Author}</td>
                  <td>${book.Type}</td>
              </tr>`;
              tablebody.innerHTML += uiString;

}
//implement the clear function
Display.prototype.clear=function(){
    let libraryform=document.getElementById("libraryform");
    libraryform.reset();
}
//implement the validate function
Display.prototype.validate=function(book){
   if (book.Name.length <= 2 || book.Author.length <= 2)
   {
return false
   }
   else{
return true;
   }
}
   Display.prototype.show=function(Type, displaymessage){
       let message=document.getElementById("massage");
       message.innerHTML=`<div class="alert alert-${Type} alert-dismissible fade show" role="alert">
                            <strong></strong> ${displaymessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
                        setTimeout(function () {
                            message.innerHTML = ''
                        }, 2000);
   }




//add submit event listener to library form
let libraryform=document.getElementById("libraryform");
libraryform.addEventListener("submit", libraryformSubmit);

function libraryformSubmit(e) {
    console.log("you have submited library form");
    let Name=document.getElementById("Bookname").value;
    let Author=document.getElementById("Author").value;
    
    let computer=document.getElementById("Computer");
    let cooking=document.getElementById("Cooking");
    let science=document.getElementById("Science");
    let mathamatic=document.getElementById("Mathamatic");
    let Type ;

    if (computer.checked){
    Type=computer.value;
    }
    else if (cooking.checked){
        Type=cooking.value;
    }
        else if (science.checked){
            Type=science.value;
        }
        else if (mathamatic.checked){
                Type=mathamatic.value;
            }
    let book=new Book(Name, Author, Type);
    console.log(book);

    let display=new Display();

    if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show("success", "Your book has been successfully added.");
    }
    else{
        display.show("danger", "Sorry you can not add this book.");

    }
    e.preventDefault();
}
