let arrow = document.getElementById("floating-arrow");
let menu = document.getElementById("toggle");
let navig = document.getElementById("main-header");
let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }

  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    navig.style.position = "sticky";
    navig.style.backgroundColor = "#822fff";
  } else {
    navig.style.position = "relative";
    navig.style.backgroundColor = "transparent";
  }

  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

function goUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function show() {
  if (menu.classList.contains("open")) {
    // If menu is open, close it
    menu.classList.remove("open");
  } else {
    // If menu is closed, open it
    menu.classList.add("open");
  }
}
