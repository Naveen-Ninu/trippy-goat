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
