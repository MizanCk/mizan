var swiper = new Swiper(".mySwiper", {
    rewind: true,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  var acc = document.getElementsByClassName('faqs-title');
  var i;
  
  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
          this.classList.toggle('active');
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
          } else {
              panel.style.maxHeight = panel.scrollHeight + 'px';
          }
      });
  }