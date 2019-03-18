function sticky_relocate_left() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('.center').addClass('mobile-sticky');
    } else {
        $('.center').removeClass('mobile-sticky');
    }
}

$(function () {
  //$(window).addEventListener("touchmove", sticky_relocate_right, false);
  setTimeout($(window).scroll(sticky_relocate_left),0);
  $(window).scroll(sticky_relocate_right);
  sticky_relocate_left();
  sticky_relocate_right();
});
//end sticky button
