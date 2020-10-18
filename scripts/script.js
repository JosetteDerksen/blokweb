// JavaScript Document


function myFunction() {
    var x = document.getElementById("ul.links");
    if (x.style.display === "block") 
        {x.style.display = "none";}
    else {x.style.display = "block"}
}

var menuKnop =
document.querySelector("section.container");

menuKnop.addEventListener("click", kruis);
function kruis() {

    menuKnop.classList.toggle("kruis");
}

