const menuButton=document.querySelector(".header__menu-btn"),sideBarMobile=document.querySelector(".header__sidebar-mobile");menuButton.addEventListener("click",()=>{sideBarMobile.classList.toggle("open")});const showingTopBarOnScroll=()=>{document.body.scrollTop>20||document.documentElement.scrollTop>20?topMenuBar.style.top="0":topMenuBar.style.top="-86px"};window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?topMenuBar.style.top="0":topMenuBar.style.top="-86px"};