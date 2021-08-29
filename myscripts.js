//most popular section//
var slideIndex = 1;
            showSlides(slideIndex);
            
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
            
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
            
            function showSlides(n) {
              var i;
              var slides = document.getElementsByClassName("mySlides");
              if (n > slides.length) {slideIndex = 1}    
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";  
              }
              
              slides[slideIndex-1].style.display = "block";  


}
//must see section//
document.getElementById("p1p").onmouseover=function(){
    
    document.getElementById("p1klam").style.zIndex="1";
}
document.getElementById("p1p").onmouseout=function(){
    
    document.getElementById("p1klam").style.zIndex="-1";
}

document.getElementById("p2p").onmouseover=function(){
    
    document.getElementById("p2klam").style.zIndex="1";
}
document.getElementById("p2p").onmouseout=function(){
    
    document.getElementById("p2klam").style.zIndex="-1";
}

document.getElementById("p3p").onmouseover=function(){
    
    document.getElementById("p3klam").style.zIndex="1";
}
document.getElementById("p3p").onmouseout=function(){
    
    document.getElementById("p3klam").style.zIndex="-1";
}

document.getElementById("p4p").onmouseover=function(){
    
    document.getElementById("p4klam").style.zIndex="1";
}
document.getElementById("p4p").onmouseout=function(){
    
    document.getElementById("p4klam").style.zIndex="-1";
}

document.getElementById("p5p").onmouseover=function(){
    
    document.getElementById("p5klam").style.zIndex="1";
}
document.getElementById("p5p").onmouseout=function(){
    
    document.getElementById("p5klam").style.zIndex="-1";
}

document.getElementById("p6p").onmouseover=function(){
    
    document.getElementById("p6klam").style.zIndex="1";
}
document.getElementById("p6p").onmouseout=function(){
    
    document.getElementById("p6klam").style.zIndex="-1";
}
/*
function visitPage1(){
    window.location ='https://www.yogawinetravel.com/things-to-know-before-traveling-to-egypt/', '_blank';
    
}
function visitPage2(){
    window.location='https://matadornetwork.com/trips/what-not-to-do-in-egypt/';
}
*/

/**/
if(localStorage.getItem("username")){
    document.getElementById("name").value = localStorage.getItem("username");

}
if(localStorage.getItem("useremail"))
{
    document.getElementById("email").value =localStorage.getItem("useremail");

}
function myFunction() {
    var checkBox = document.getElementById("Rememberme");
    if (checkBox.checked == true){
       localStorage.setItem("username",document.getElementById("name").value);
       localStorage.setItem("useremail",document.getElementById("email").value);
    }
    else{
        localStorage.removeItem("username");
        localStorage.removeItem("useremail")
    }
}






