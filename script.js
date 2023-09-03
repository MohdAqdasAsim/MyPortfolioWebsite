// const contact_btn = document.getElementById("contact-btn");

// contact_btn.onclick = () => {
//   alert("Yes")
// };

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
  })
}

function changeColor(icon,condition) {
  if (condition) {
    icon.style = "color: var(--nav-bar-icon-hover-color);"
  } else {
    icon.style = "color: var(--nav-bar-icon-color);"
  }
}