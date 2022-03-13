var textOverImages=document.querySelectorAll(".onClickTextOverImage div");

for(var i=o; i<textOverImages.length; i++){
    textOverImages[i].onclick=function(){
        this.classList.toggle("show"); 
    }
}