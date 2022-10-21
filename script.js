//шапочка при скроле//
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
const burger = document.getElementById('menu__burger');
const menu = document.getElementById('menu');
const sidebar = document.getElementById('fixed-panel');
const anchors = document.querySelectorAll('a[href*="#"]');
//бургер меню//
burger.onclick = function() {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  sidebar.classList.toggle('active');
  body.classList.toggle('hidden');
};
//закрытие бургер меню за пределами окна//
document.onclick = function(e) {
  if (!e.target.closest('#menu__burger') && !e.target.closest('#menu') && e.target.id !== '#fixed-panel') {
    menu.classList.remove('active');
    burger.classList.remove('active');
    sidebar.classList.remove('active');
    body.classList.remove('hidden');
  }
};

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
};

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }
 
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

const swiper = new Swiper('.first-screen__swiper', {
  allowTouchMove: false,
  effect: "cards",
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});

const projects = new Swiper('.projects__swiper', {
  grabCursor: true,
  width: 442,
  freeMode: true,

});

const partners = new Swiper('.partners__swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 1.7,
    },
    710: {
      slidesPerView: 2.4,
    },
    994: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  }
});