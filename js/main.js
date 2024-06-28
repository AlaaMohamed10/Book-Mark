
var bookmarkName = document.getElementById('bookmarkName')
var bookmarkUrl = document.getElementById('bookmarkUrl')



var bookList = []

if(localStorage.getItem('Product')!=null){
    bookList = JSON.parse(localStorage.getItem('Product'))
    display()
}

function addTable(){
    if(nameValidation()==true&&urlValidation()==true){
        var add = {
            name :bookmarkName.value,
            url : bookmarkUrl.value,
        }
      
        bookList.push(add)
    
        localStorage.setItem('Product',JSON.stringify(bookList))
        console.log(bookList)
    
        display()
        clear()
        bookmarkName.classList.remove('is-valid')
        bookmarkUrl.classList.remove('is-valid')
        //////////////////////////////////////////////////////////////////////////////////////////
    }else{document.getElementById('contantDiv').innerHTML= 
        `
        <div class="rounded-2  p-4  mx-auto head-content bg-white ">  
        <div class="box-header  d-flex justify-content-between align-items-center mb-4">
   
           <div class="circles d-flex">
               <span class="rounded-circle me-2 bg-danger"></span>
               <span class="rounded-circle me-2 bg-warning"></span>
               <span class="rounded-circle me-2 bg-success"></span>
           </div>
           <button class="btn border-0" onclick="notValidate()"><i class="fa-solid fa-xmark"></i></button>
       </div>
       <p class="pb-2 m-0">Site Name or Url is not valid, Please follow the rules below :</p>
       <ol class="rules list-unstyled m-0">
           <li><i class="fa-regular fa-circle-right"></i>Site name must contain at least 3 characters</li>
           <li><i class="fa-regular fa-circle-right"></i>Site URL must be a valid one</li>
       </ol> 
       </div> 
       `
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
}



function display(){
    
    var cartona =''

    for(var i=0 ;i<bookList.length;i++){
        cartona += `
     <tr>
        <td>${i}</td>
        <td>${bookList[i].name}</td>
        <td> 
         <a href="/${bookList[i].url}" target="_blank" class="btn  btn-visit"> 
       <i class="fa-solid fa-eye"></i>
       Visit
         </a>
      
    
        </td>
        <td>
    <button onclick="deleteItem(${i})" class="btn btn-delete">
       <i class="fa-solid fa-trash-can"></i>
    Delete
    </button>
        
        </td> 
       </tr>
    `
    }
    
    document.getElementById('tableBody').innerHTML=cartona

}

function deleteItem(index){
    bookList.splice(index,1)
localStorage.setItem('Product',JSON.stringify(bookList))

display()
}


function clear(){
   
    bookmarkName.value=''
    bookmarkUrl.value=''
  
}

function nameValidation(){
var regexName =/^[A-Z][a-z]{3,8}$/

    var text =bookmarkName.value
    console.log(regexName.test(text))

if(regexName.test(text)){
    bookmarkName.classList.add('is-valid')
    bookmarkName.classList.remove('is-invalid')
    return true


}else{
    bookmarkName.classList.add('is-invalid')
    bookmarkName.classList.remove('is-valid')
    return false

}

}


function urlValidation() {
    var regexUrl = /^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{3,15}\.com$/
    var text =bookmarkUrl.value

    if(regexUrl.test(text)){
        bookmarkUrl.classList.add('is-valid')
        bookmarkUrl.classList.remove('is-invalid')
    return true

    }else{
        bookmarkUrl.classList.add('is-invalid')
        bookmarkUrl.classList.remove('is-valid')
        return false
    }
}

/////////////////////////////////////////////////////////////////////////////////
function notValidate(){
    document.getElementById('contantDiv').innerHTML=`
          <div class="  p-4  d-none  " >
           <div class="head-content bg-white  mx-auto rounded-2"> 
           </div>
           </div>
      `  
     
   }












