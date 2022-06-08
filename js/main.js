const firstIMG = document.getElementById("first-img");
const secondIMG = document.getElementById("second-img");
const lineBreak1 = document.getElementById("line-break-1");
const lineBreak2 = document.getElementById("line-break-2");
const lineBreak3 = document.getElementById("line-break-3");
const modal = document.getElementById("modal");
const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const modalLink=document.querySelectorAll(".modal-drop-btn");
const modalDrop=document.querySelectorAll(".modal-drop-list");
const dropArrow=document.querySelectorAll(".drop-arrow");
const navArrow=document.querySelectorAll(".nav-arrow");
const navLink=document.querySelectorAll(".drop");
console.log(navArrow);
let showMenu=true;
let navHover=true;


window.addEventListener("load",function(){
    media();
});

function media(){
    let myQueries = window.matchMedia("(max-width:767px)");
    const ifMediaChanges =e=>{
        if(e.matches){
            firstIMG.style.display="none";
            secondIMG.style.display="block";
            lineBreak1.style.display = "none";
            lineBreak2.style.display = "none";
            lineBreak3.style.display = "none";
        }else{
            firstIMG.style.display="block";
            secondIMG.style.display="none";
            lineBreak1.style.display = "inline";
            lineBreak2.style.display = "inline";
            lineBreak3.style.display = "inline";
            modal.style.display = "none";
        }
    }
    myQueries.addListener(ifMediaChanges);
    ifMediaChanges(myQueries);
}

menuBtn.addEventListener("click",openModal);
closeBtn.addEventListener("click",closeModal);
function openModal(){
    modal.style.display = "block";
}
function closeModal(){
    modal.style.display = "none";
}
modalLink[0].addEventListener("click",function(){
    if(showMenu){
        modalDrop[0].classList.remove("hide");
        showMenu=false;
        dropArrow[0].setAttribute("src","./images/icon-arrow-up.svg")
    }else{
        modalDrop[0].classList.add("hide");
        showMenu=true;
        dropArrow[0].setAttribute("src","./images/icon-arrow-down.svg")
    }
})
modalLink[1].addEventListener("click",function(){
    if(showMenu){
        modalDrop[1].classList.remove("hide");
        showMenu=false;
        dropArrow[1].setAttribute("src","./images/icon-arrow-up.svg")
    }else{
        modalDrop[1].classList.add("hide");
        showMenu=true;
        dropArrow[1].setAttribute("src","./images/icon-arrow-down.svg")
    }
})
navLink[0].addEventListener("mouseover",function(){
    navArrow[0].setAttribute("src","./images/icon-arrow-up.svg");
})
navLink[0].addEventListener("mouseout",function(){
    navArrow[0].setAttribute("src","./images/icon-arrow-down.svg");
})
navLink[1].addEventListener("mouseover",function(){
    navArrow[1].setAttribute("src","./images/icon-arrow-up.svg");
})
navLink[1].addEventListener("mouseout",function(){
    navArrow[1].setAttribute("src","./images/icon-arrow-down.svg");
})

