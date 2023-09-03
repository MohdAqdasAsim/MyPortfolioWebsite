const letters = document.getElementsByClassName("letter");

for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("animationend", () => {
    letters[i].classList.remove("animated");
  });
  letters[i].addEventListener("mouseover", () => {
    letters[i].classList.add("animated");
  })
}

const letters_about = document.getElementsByClassName("letter-about-me");

for (let i = 0; i < letters_about.length; i++) {
  letters_about[i].addEventListener("animationend", () => {
    letters_about[i].classList.remove("animated");
  });
  letters_about[i].addEventListener("mouseover", () => {
    letters_about[i].classList.add("animated");
  });
};

function changeColor(icon, condition) {
  if (condition) {
    icon.style = "color: var(--nav-bar-icon-hover-color);"
  } else {
    icon.style = "color: var(--nav-bar-icon-color);"
  }
}

const home_icon = document.getElementById("home-icon");
const about_icon = document.getElementById("about-icon");
const skills_icon = document.getElementById("skills-icon");
const projects_icon = document.getElementById("projects-icon");
const contact_icon = document.getElementById("contact-icon");
const icons = [home_icon, about_icon, skills_icon, projects_icon, contact_icon];

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("mouseenter", () => {
    switch (i) {
      case 0:
        icons[i].innerHTML = '<a href="#home">HOME</a>';
        break;
      case 1:
        icons[i].innerHTML = '<a href="#about-me">ABOUT</a>';
        break;
      case 2:
        icons[i].innerHTML = '<a href="#skills">SKILLS</a>';
        break;
      case 3:
        icons[i].innerHTML = '<a href="#projects">PROJECTS</a>';
        break;
      case 4:
        icons[i].innerHTML = '<a href="#contact">CONTACT</a>';
        break;
    }
  });
  icons[i].addEventListener("mouseleave", () => {
    switch (i) {
      case 0:
        icons[i].innerHTML = '<a href="#home"><i class="fa-solid fa-house fa-lg" style="color: var(--nav-bar-icon-color)" onmouseover="changeColor(this,true)" onmouseleave="changeColor(this,false)"></i></a>';
        break;
      case 1:
        icons[i].innerHTML = '<a href="#about-me"><i class="fa-solid fa-user fa-lg" style="color: var(--nav-bar-icon-color)" onmouseover="changeColor(this,true)" onmouseleave="changeColor(this,false)"></i></a>';
        break;
      case 2:
        icons[i].innerHTML = '<a href="#skills"><i class="fa-solid fa-gear fa-lg" style="color: var(--nav-bar-icon-color)" onmouseover="changeColor(this,true)" onmouseleave="changeColor(this,false)"></i></a>';
        break;
      case 3:
        icons[i].innerHTML = '<a href="#projects"><i class="fa-solid fa-file fa-lg" style="color: var(--nav-bar-icon-color)" onmouseover="changeColor(this,true)" onmouseleave="changeColor(this,false)"></i></a>';
        break;
      case 4:
        icons[i].innerHTML = '<a href="#contact"><i class="fa-solid fa-envelope fa-lg" style="color: var(--nav-bar-icon-color)" onmouseover="changeColor(this,true)" onmouseleave="changeColor(this,false)"></i></a>';
        break;
    }
  });
};

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

theme_btn.addEventListener("click",() => {
  if (theme_btn.dataset.currentMode == 0) {
    theme_circle.innerHTML = '<i class="fa-solid fa-sun fa-xl" style="color: var(--background-color-web)"></i>';
    theme_circle.style.transform = "translate(100%,0%)";
    theme_btn.dataset.currentMode = 1;
  } else {
    theme_circle.innerHTML = '<i class="fa-solid fa-moon fa-xl" style="color: var(--background-color-web)"></i>';
    theme_circle.style.transform = "translate(0%,0%)";
    theme_btn.dataset.currentMode = 0;
  }
});

// const background_music = new Audio();

const music_btn = document.getElementById("music");
const music_circle = document.getElementById("music-circle");

music_btn.addEventListener("click",() => {
  if (music_btn.dataset.currentVolume == 0) {
    music_circle.innerHTML = '<i class="fa-solid fa-volume-xmark fa-xl" style="color: var(--background-color-web)"></i>';
    music_circle.style.transform = "translate(100%,0%)";
    music_btn.dataset.currentVolume = 1;
  } else {
    music_circle.innerHTML = '<i class="fa-solid fa-volume-high fa-xl" style="color: var(--background-color-web)"></i>';
    music_circle.style.transform = "translate(0%,0%)";
    music_btn.dataset.currentVolume = 0;
  }
});