let navbar= document.getElementById("navbar")
let link= document.getElementById("link-a")
let showMenu= document.getElementById("show-menu")


link.addEventListener('click',function(){
    document.getElementById("navbar").style.display = "none"
});

showMenu.addEventListener('click',function(){
    document.getElementById("navbar").style.display = "flex"
});