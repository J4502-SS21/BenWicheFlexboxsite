"use strict";

var  menuNav = document.getElementById("menu_nav");

var menuTrigger = document.getElementById("menu_trigger");
function menutoggle() {
if (menuNav.style.display === "flex") {
  menuNav.style.display = none;
  menuTrigger.style.border ="4px solid purple";
}else {menuNav.style.display = 'flex';}
  console.log()"The menu has been toggled!";
}


menuTrigger.onclick=menutoggle;
