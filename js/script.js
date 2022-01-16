
let swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 5,
    initialSlide: 2,
    // loop: true,
});
let swiper2 = new Swiper(".mySwiper2", {
    // loop: true,
    initialSlide: 2,
    thumbs: {
        swiper: swiper,
    },
});
if (document.querySelector('.popup')) {
  const body = document.querySelector('body')
  const popup = document.querySelector('.popup')
  const popupBg = document.querySelector('.popup__bg')
  const popupOpenBtn = document.querySelector('.popup-open')
  const popupCloseBtn = document.querySelector('.popup-body__close')

  popupOpenBtn.addEventListener('click', () => {
    if (!popup.classList.contains('active')) {
      popup.classList.add('active')
      body.classList.add('lock')
    }
  })
  popupBg.addEventListener('click', () => {
    if (popup.classList.contains('active')) {
      popup.classList.remove('active')
      body.classList.remove('lock')
    }
  })
  popupCloseBtn.addEventListener('click', () => {
    if (popup.classList.contains('active')) {
      popup.classList.remove('active')
      body.classList.remove('lock')
    }
  })
}

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});