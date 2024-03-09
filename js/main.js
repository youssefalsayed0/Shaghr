let arrow = document.getElementById("floating-arrow");
let menu = document.getElementById("toggle");
let navig = document.getElementById("main-header");
let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (
    document.body.scrollTop > 200||
    document.documentElement.scrollTop > 200
  ) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
  
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
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

/* owl slider */
function logo_carouselInit() {
  $('.logo_items').owlCarousel({
      loop: true,
      margin: 20,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 4
          },
          576: {
              items: 5,
          },
          768: {
              items: 6,
          },
          992: {
              items: 8,
          }
      }
  })

  var owl = $('.main_active');
owl.owlCarousel({
  dots:true,
    items:1,
    loop:true,
    autoplay:true,
    smartSpeed: 1100,
    autoplayTimeout:3000,
    autoplayHoverPause:true,

});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

}
logo_carouselInit();

