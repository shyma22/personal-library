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
        if(this.read===True){
            let readInfo="not read yet";
        }
        else{
            let readInfo="read";
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
    const one = new Book(title,author,pages);
   console.log(one);
   
    myLibrary.push(one)
    showInfo(one);
}
window.onclick=function(event){
if(event.target==modal){
    modal.style.display="none";
}
}
const container=document.getElementById("container")
function showInfo(one){
    const div=document.createElement("div");
    container.appendChild(div)
    const title=document.createElement("p");
    title.value=`Title: ${one.title}`
    div.appendChild(title);



}




