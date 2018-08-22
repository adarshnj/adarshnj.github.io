// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const portrait = document.querySelector(".portrait");
const home = document.querySelector("#home-name");
const navItems = document.querySelectorAll(".nav-item");

// document.querySelector(".nav-item").addEventListener("click", toggleMenu());

// Set initial state (open or close)

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
portrait.addEventListener("click", toggleMenu);
navItems.forEach(item => (item.onclick = toggleMenu));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

function toggleMenu(ele) {
  if (!showMenu) {
    // if (home) home.style.marginTop = "10px";
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set menu state
    showMenu = true;
  } else {
    // if (home) home.style.marginTop = "0vh";
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set menu state
    showMenu = false;
  }
}
