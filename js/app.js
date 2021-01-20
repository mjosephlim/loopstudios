const btnHamburger = document.querySelector('#hamburger-1');
const overlay = document.querySelector('.overlay');
const body= document.querySelector('body');
const mobileNav=document.querySelector('#mobile-nav');

btnHamburger.addEventListener('click',function(){
  
  if(btnHamburger.classList.contains("is-active")){
    btnHamburger.classList.remove("is-active");
    overlay.style.display="none";
    body.style.height="auto";
    body.style.overflow="visible";
    console.log("closed");//Close
  }else{
    btnHamburger.classList.add("is-active");
    overlay.style.display="block";
    body.style.height="100%";
    body.style.overflow="hidden";
    console.log("opened");
    //Open
  }
});

mobileNav.addEventListener('click',function(){
if(btnHamburger.classList.contains("is-active")){
  btnHamburger.classList.remove("is-active");
    overlay.style.display="none";
    body.style.height="auto";
    body.style.overflow="visible";
}
});

