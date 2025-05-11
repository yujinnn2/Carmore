// hbg button 
let hbg = document.querySelector('.hbg');
hbg.onclick = function () {
  navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
  // $(function () {});
};

// section01 swiper
let sec01_swiper = new Swiper(".sec01_mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next"
  },
});

// section07 swiper
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
  breakpoints: {
    1920: {
      slidesPerView: 3.5,
    },
    1280: {
      slidesPerView: 3.5,
    },
    1024: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3,
    },
    540: {
      slidesPerView: 2.5,
    },
    430: {
      slidesPerView: 2.5,
    }
  }
});

// // Swiper 초기화
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.sec01_mySwiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
    },
    effect: 'slide',
    speed: 800,
  });

  // Wow.js 초기화 (애니메이션 효과)
  new WOW().init();

  // 차량 이미지 호버 효과
  const carImages = document.querySelectorAll('.car');
  carImages.forEach(car => {
    car.addEventListener('mouseenter', () => {
      car.style.transform = 'scale(1.05)';
    });
    car.addEventListener('mouseleave', () => {
      car.style.transform = 'scale(1)';
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Wow.js 초기화
  new WOW().init();

  // 아이콘 호버 효과 강화
  const icons = document.querySelectorAll('.main-icon');
  icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      const iconImg = icon.querySelector('.icon');
      iconImg.style.transform = 'scale(1.1) rotate(5deg)';
    });

    icon.addEventListener('mouseleave', () => {
      const iconImg = icon.querySelector('.icon');
      iconImg.style.transform = 'scale(1) rotate(0)';
    });
  });


  // 토글 버튼 애니메이션
  const toggle = document.querySelector('.toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      this.classList.toggle('active');
      // 추가적인 토글 기능 구현 가능
    });
  }
});