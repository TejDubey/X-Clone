document.getElementById("hl1").addEventListener("click",()=>{
    window.location.href="./terms.html";
})
document.getElementById("hl2").addEventListener("click",()=>{
    window.location.href="./privacy.html";
})
document.getElementById("hl3").addEventListener("click",()=>{
    window.location.href="./cookies.html";
})
document.getElementById("hl4").addEventListener("click",()=>{
    window.location.href="./accessibility.html";
})
document.getElementById("hl5").addEventListener("click",()=>{
    window.location.href="./adsinfo.html";
})
document.getElementById("hl5").addEventListener("click",()=>{
    window.location.href="./adsinfo.html";
})
document.getElementById("hl7").addEventListener("click",()=>{
    let x=confirm("You are moving to my github homepage. Do you wish to continue?");
    if(x) window.location.href="https://github.com/TejDubey";
})
function showMore(e){
    e.stopPropagation();
    let x=document.getElementById("more");
    if(x.style.display==="block"){
        x.style.display="none";
    }
    else{
        x.style.display="block";
    }
}
document.addEventListener("click", function(){
    document.getElementById("more").style.display = "none";
});
document.getElementById("more").addEventListener("click", function(event){
    event.stopPropagation();
});
function About(){
    window.location.href="./about.html";
}
function GetApp(){
    window.location.href="./getapp.html";
}
function Developers(){
    window.location.href="./developers.html";
}