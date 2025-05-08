// hbg button 
let hbg = document.querySelector('.hbg');
hbg.onclick = function () {
  navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
  // $(function () {});
};

//Initialize Swiper 
let sec01_swiper = new Swiper(".sec01_mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next"
  },
});

// Initialize Swiper
let sec07_swiper = new Swiper(".sec07_mySwiper", {
  direction: "vertical",
  slidesPerView: 3.5,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true
  },
  mousewheel: true,
  centeredSlides: true,
  // breakpoints: {
  //   768: {
  //     slidesPerView: 3.5,
  //   },
  //   540: {
  //     slidesPerView: 2,
  //   }
  // }
});
