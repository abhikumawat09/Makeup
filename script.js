//=========== HOME ========

var swiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    //pagination: {
      //el: ".swiper-pagination",
      //clickable: true,
    //},
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//=========== SHOP ========

  var swiper = new Swiper(".shop-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      924: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  //=========== TESTIMONIAL ========

  var swiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    //autoplay: {
      //delay: 2500,
      //disableOnInteraction: false,
    //},
    //pagination: {
      //el: ".swiper-pagination",
      //clickable: true,
    //},
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });

   //=========== NAVLIST ========

   const menuBtn = document.querySelector(".lnr-menu");
   const navList = document.querySelector(".navlist");
    
    menuBtn.onclick = function(){
      menuBtn.classList.toggle("lnr-chevron-up");
      navList.classList.toggle("active");
    }

    //=========== SCROLL REVEAL ========
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2500,
      delay: 400,
      reset: false,
    })

    sr.reveal('.home-container .content', {delay: 200, origin: 'bottom'});
    sr.reveal('.home-container .home-search', {delay: 200, origin: 'top'});
    sr.reveal('.about-container .left', {delay: 200, origin: 'left'});
    sr.reveal('.services-container', {delay: 200, origin: 'top'});
    sr.reveal('.testimonial-container .profile img', {delay: 200, origin: 'bottom'});
    sr.reveal('.testimonial-container .profile p', {delay: 200, origin: 'top'});
    sr.reveal('.experts-container', {delay: 200, origin: 'top'});
    sr.reveal('.blog-container', {delay: 200, origin: 'left'});
    sr.reveal('.contact-container .left', {delay: 200, origin: 'bottom'});
    sr.reveal('.contact-container .right', {delay: 200, origin: 'top'});
    sr.reveal('.footer-container', {delay: 200, origin: 'top'});


 