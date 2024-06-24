let Menu=document.querySelector("#iconbtn");
let  list=document.querySelector("#lists");
let goback=document.querySelector("#back")

Menu.addEventListener("click", function(){
list.style.display="flex";
Menu.style.display="none"
goback.style.display="flex"

})
goback.addEventListener("click", function(){
   list.style.display="none";
   Menu.style.display="flex"
   goback.style.display="none"; 

})