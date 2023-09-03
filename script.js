const mode_btn = document.getElementById("mode-btn");
const circle_btn = document.getElementById("circle-toggle");

mode_btn.addEventListener("click",() => {
  if (mode_btn.dataset.onValue == 0) {
    circle_btn.style.transform = "translateX(100%)";
    mode_btn.dataset.onValue = 1;
    circle_btn.textContent = "Off";
  } else {
    circle_btn.style.transform = "translateX(0%)";
    mode_btn.dataset.onValue = 0;
    circle_btn.textContent = "On";
  }
})

const letters = document.getElementsByClassName("letter");

for (let i = 0 ; i < letters.length; i++) {
  letters[i].addEventListener("animationend",() => {
    letters[i].classList.remove("animated");
  });
  letters[i].addEventListener("mouseover",() => {
    letters[i].classList.add("animated");
  })
}

const letters_about = document.getElementsByClassName("letter-about-me");

for (let i = 0 ; i < letters_about.length; i++) {
  letters_about[i].addEventListener("animationend",() => {
    letters_about[i].classList.remove("animated");
  });
  letters_about[i].addEventListener("mouseover",() => {
    letters_about[i].classList.add("animated");
  });
};

function changeColor(icon,condition) {
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
const icons = [home_icon,about_icon,skills_icon,projects_icon,contact_icon];

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("mouseenter",() => {
    switch(i) {
      case 0: 
      icons[i].innerHTML = '<a href="#home">HOME</a>';
      break;
      case 1: 
      icons[i].innerHTML = '<a href="#home">ABOUT</a>';
      break;
      case 2: 
      icons[i].innerHTML = '<a href="#home">SKILLS</a>';
      break;
      case 3: 
      icons[i].innerHTML = '<a href="#home">PROJECTS</a>';
      break;
      case 4: 
      icons[i].innerHTML = '<a href="#home">CONTACT</a>';
      break;
    }
  });
  icons[i].addEventListener("mouseleave",() => {
    switch(i) {
      case 0:
        icons[i].innerHTML = '<a href="#home"><i class="fa-solid fa-house fa-lg" style="color: var(--nav-bar-icon-color)" onmouseover="changeColor(this,true)" onmouseleave="changeColor(this,false)"></i></a>'; 
      break;
      case 1: 
      icons[i].innerHTML = '<a href="#home"><i class="fa-solid fa-user fa-lg" style="color: var(--nav-bar-icon-color)" onmouseover="changeColor(this,true)" onmouseleave="changeColor(this,false)"></i></a>'; 
      break;
      case 2: 
      icons[i].innerHTML = '<a href="#home"><i class="fa-solid fa-gear fa-lg" style="color: var(--nav-bar-icon-color)" onmouseover="changeColor(this,true)" onmouseleave="changeColor(this,false)"></i></a>'; 
      break;
      case 3: 
      icons[i].innerHTML = '<a href="#home"><i class="fa-solid fa-file fa-lg" style="color: var(--nav-bar-icon-color)" onmouseover="changeColor(this,true)" onmouseleave="changeColor(this,false)"></i></a>'; 
      break;
      case 4: 
      icons[i].innerHTML = '<a href="#home"><i class="fa-solid fa-envelope fa-lg" style="color: var(--nav-bar-icon-color)" onmouseover="changeColor(this,true)" onmouseleave="changeColor(this,false)"></i></a>'; 
      break;
    }
  });
};