
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

  let pauseVideo = (state) => {
    const div = document.querySelector(".popup-body__video");
    let iframe = div.querySelector("#video-iframe").contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : '';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*')
  }

  popupOpenBtn.addEventListener('click', () => {
    if (!popup.classList.contains('active')) {
      popup.classList.add('active')
      body.classList.add('lock')
      pauseVideo()
    }
  })
  popupBg.addEventListener('click', () => {
    if (popup.classList.contains('active')) {
      popup.classList.remove('active')
      body.classList.remove('lock')
      pauseVideo('hide')
    }
  })
  popupCloseBtn.addEventListener('click', () => {
    if (popup.classList.contains('active')) {
      popup.classList.remove('active')
      body.classList.remove('lock')
      pauseVideo('hide')
    }
  })
}

$(document).ready(function () {
    $('.header__btn').click(function (event) {
        $('.header__btn, .header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


AOS.init();

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