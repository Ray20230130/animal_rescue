; (function () {

  // index 頁面  👇

  //定義
  let CarouselContents = document.querySelectorAll('.CarouselContent');
  let CarouselPrevBtn = document.querySelector('#CarouselPrev');
  let CarouselNextBtn = document.querySelector('#CarouselNext');
  let num = 0;


  //函式


  function youtubeHandler(e) {
    CarouselContents.forEach(function (CarouselContent, i) {
      CarouselContent.classList.add('displayNone');
      CarouselContent.classList.remove('fade');
    })

    num += e;
    num = num % CarouselContents.length;
    if (num < 0) {
      num = 2;
    }
    CarouselContents[num].classList.remove('displayNone');
    CarouselContents[num].classList.add('fade');
  }


  //觸發

  CarouselPrevBtn.addEventListener('click', () => {
    youtubeHandler(-1);
  })
  CarouselNextBtn.addEventListener('click', () => {
    youtubeHandler(1);
  })

  // index 頁面  👆








})();


