let element=document.getElementById("hoverIcon");
let elemntList=document.getElementById("list");
let getLink=document.querySelector("ul li a");
element.style.cssText="cursor: pointer;color:white";
element.onclick=function(){
   elemntList.style.cssText="display: flex;flex-direction: column;position: relative;position: absolute;gap: 15PX;left: 0;top: 100%;width: 90%; border-radius: 5PX;height: 230PX;background-color: black ;opacity: 0.7;";
   getLink.style.cssText="border-bottom: 2PX solid var(--maincolor);";
   element.onclick=function(){
    elemntList.style.cssText="display:none;";
   }
}

let getlistul=document.querySelectorAll("ul li ");
let getlanding=document.querySelector(".landing");
let geticon=document.querySelectorAll(".fa-2x");
(geticon);
let currentindex=0;
geticon.forEach((i)=>{
    i.addEventListener("click",(e)=>{
    let img1="../img/the-imagination_1366x768.jpg";
    let img2= "../img/levitate_1280x800.jpg";
    let img3="../img/the\ face.jpg";
    let img=[img1,img2,img3];
     currentindex=(currentindex+1)%img.length;
     getlanding.style.cssText = `background-image: url(${img[currentindex]});`;
    
});
});
