const myLibrary=[];


function addBookToLibrary(){

}



function Book(title,author,pages,read){
    if(!new.target){
        console.log("should use the 'new' operator");
    }
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=function(){
        let readInfo
        if(this.read===true){
             readInfo="not read yet";
        }
        else{
             readInfo="read";
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readInfo}`;
    }
}
var modal=document.getElementById("myModal");
var btn=document.getElementById("addBook");
var add=document.getElementsByClassName("close")[0];
btn.onclick=function(){
    modal.style.display="block";
}
add.onclick=function(){
    modal.style.display="none";
    const title=document.getElementById("title").value;
    const author=document.getElementById("author").value;
    const pages=document.getElementById("pages").value;
    const read=document.getElementById("read").checked;

    showInfo(new Book(title,author,pages,read));
   
   
    
    
}
window.onclick=function(event){
if(event.target==modal){
    modal.style.display="none";
}
}
const container=document.getElementById("container")
function showInfo(one){
    console.log("hi");
    myLibrary.push(one)
    arraySize=myLibrary.length;
    console.log(arraySize);
    const lastBook=myLibrary[arraySize-1];
 
    const div=document.createElement("div");
    document.getElementById("bookGrid").appendChild(div);

    const titl=document.createElement("p");
    titl.textContent=`Title: ${lastBook.title}`
    div.appendChild(titl);
    const autho=document.createElement("p");
    autho.textContent=`Author: ${lastBook.author}`;
    div.appendChild(autho);
    const page=document.createElement("p");
    page.textContent=`No of Pages: ${lastBook.pages}`;
    div.appendChild(page);
    const rea=document.createElement("p");
    if(lastBook.read){
        rea.textContent=`Read 💖`;
        rea.style.cssText = `
      background-color: #d0f4de;
      color: #2d6a4f;
      padding: 4px 8px;
      border: 1.5px dashed #95d5b2;
      border-radius: 6px;
      width: fit-content;
      margin-top: 10px;
      font-weight: bold;
    `;
        
    }
    else{
        rea.textContent=`Not read 💔`;
        rea.style.cssText = `
        background-color: #ffd6d6;
        color: #a4161a;
        padding: 4px 8px;
        border: 1.5px dashed #ef233c;
        border-radius: 6px;
        width: fit-content;
        margin-top: 10px;
        font-weight: bold;
      `;
    }
    titl.style.color = "#a29bfe";
    titl.style.fontSize="25px";
    autho.style.color = "#9F8383";
    autho.style.fontSize="25px";
    page.style.color = "#fab1a0";
    page.style.fontSize="25px";
    div.style.cssText = `
  border: 2px dashed #cba6f7;
  padding: 16px;
  margin: 16px;
  width: 260px;
  background-color: #fdf6ff;
  border-radius: 12px;
  font-family: 'Patrick Hand', cursive;
  box-shadow: 3px 3px 0px #cba6f7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;
    console.log(lastBook.read);
    div.appendChild(rea);
    const dlt=document.createElement("button");
    dlt.textContent="Delete";
    dlt.style.cssText = `
  margin-top: 12px;
  padding: 6px 12px;
  border: none;
  background-color: #ffb5e8;
  color: #4a4a4a;
  font-family: 'Comic Sans MS', 'Patrick Hand', cursive;
  border-radius: 6px;
  box-shadow: 2px 2px 0px #ffaec0;
  cursor: pointer;
  transition: transform 0.1s ease;
`;
dlt.onmouseover = () => dlt.style.transform = 'scale(1.05)';
dlt.onmouseout = () => dlt.style.transform = 'scale(1)';
    div.appendChild(dlt);
    dlt.onclick=function(){
        div.remove();
    }
    
    




    


}




