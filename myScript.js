function Activited1(){
    document.getElementById("demo1").style.background = "black";
    document.getElementById("demo2").style.background = "#343a40";
    document.getElementById("demo3").style.background = "#343a40";
}
function Activited2(){
    document.getElementById("demo2").style.background = "black";
    document.getElementById("demo3").style.background = "#343a40";
    document.getElementById("demo1").style.background = "#343a40";
}
function Activited3(){
    document.getElementById("demo3").style.background = "black";
    document.getElementById("demo2").style.background = "#343a40";
    document.getElementById("demo1").style.background = "#343a40";
}

var modal = document.getElementById("myModal");
var i;
var img = document.getElementsByClassName("myimg");
var modalImg = document.getElementById("img01");

 for(i=0;i< img.length;i++)
   {    
    img[i].onclick = function(){

    modal.style.display = "block";
       modalImg.src = this.src;

 }
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
   modal.style.display = "none";
}