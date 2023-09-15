function changeColor(icon, condition) {
  if (condition) {
    icon.style = "color: var(--nav-bar-icon-hover-color);"
  } else {
    icon.style = "color: var(--nav-bar-icon-color);"
  }
}

const setting_btn = document.getElementById("setting-btn");
const setting_menu = document.getElementById("setting-menu");

setting_btn.addEventListener("click", () => {
  if (setting_btn.dataset.visibleValue == 0) {
    setting_menu.style.transform = "translate(0px,0px)";
    setting_btn.dataset.visibleValue = 1;
  } else {
    setting_menu.style.transform = "translate(500px,-500px)";
    setting_btn.dataset.visibleValue = 0;
  }
});

const theme_btn = document.getElementById("theme");
const theme_circle = document.getElementById("theme-circle");

theme_btn.addEventListener("click", () => {
  if (theme_btn.dataset.currentMode == 0) {
    theme_circle.innerHTML = '<i class="fa-solid fa-sun fa-xl" style="color: var(--background-color-web)"></i>';
    theme_circle.style.transform = "translate(100%,0%)";
    theme_btn.dataset.currentMode = 1;
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
    const images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {
      images[i].style.filter = "invert(1) hue-rotate(180deg)";
    }
  } else {
    theme_circle.innerHTML = '<i class="fa-solid fa-moon fa-xl" style="color: var(--background-color-web)"></i>';
    theme_circle.style.transform = "translate(0%,0%)";
    theme_btn.dataset.currentMode = 0;
    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
    const images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {
      images[i].style.filter = "invert(0) hue-rotate(0deg)";
    }
  }
});

const background_music = new Audio("./music/m2.mp3");

const music_btn = document.getElementById("music");
const music_circle = document.getElementById("music-circle");

music_btn.addEventListener("click", () => {
  if (music_btn.dataset.currentVolume == 0) {
    music_circle.innerHTML = '<i class="fa-solid fa-volume-high fa-xl" style="color: var(--background-color-web)"></i>';
    music_circle.style.transform = "translate(100%,0%)";
    music_btn.dataset.currentVolume = 1;
    background_music.play();
  } else {
    music_circle.innerHTML = '<i class="fa-solid fa-volume-xmark fa-xl" style="color: var(--background-color-web)"></i>';
    music_circle.style.transform = "translate(0%,0%)";
    music_btn.dataset.currentVolume = 0;
    background_music.pause();
  }
});

const menu = document.getElementById("menu");
const menu_div = document.getElementById("menu-div");
const nav_bar = document.getElementById("nav-bar");

menu_div.addEventListener("click",() => {
  if(menu_div.dataset.statusValue == 0) {
    menu_div.innerHTML = '<i class="fa-solid fa-xmark fa-2xl"></i>';
    menu_div.dataset.statusValue = 1;
    nav_bar.style.width = "15%";
    menu_div.style.justifyContent = "flex-start";
  } else {
    menu_div.innerHTML = '<i class="fa-solid fa-bars fa-2xl"></i>';
    menu_div.dataset.statusValue = 0;
    nav_bar.style.width = "7%";
    menu_div.style.justifyContent = "center";
  }
});