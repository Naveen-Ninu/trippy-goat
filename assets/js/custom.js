// DEFINE AOS LINK=========================================== */
AOS.init({
    duration: 1000,
    once: true,
});
// ========== BACK TO TOP
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#scroll").fadeIn();
        } else {
            $("#scroll").fadeOut();
        }
    });
    $("#scroll").click(function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            40
        );
        return false;
    });
});

// <============== NAVBAR CSS ==================>
const sidebar = document.querySelector(".overlay");

    function Togleside() {
      sidebar.classList.add("show_nav");
      document.body.classList.add("overflow_hidden");
      document.body.classList.remove("overflow-auto");
      document.body.classList.add("vh-100");
    }

    function hideNav() {
      sidebar.classList.remove("show_nav");
      document.body.classList.add("overflow-auto");
      document.body.classList.remove("overflow_hidden");
      document.body.classList.remove("vh-100");
}
   
$('.team_slider').slick({
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  slidesToShow: 3,
  responsive: [{
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1.6,
         centerMode: true,
        arrows: false,
        slidesToScroll: 1,
          dots:true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
         dots:true,
      },
    },
  ],
});