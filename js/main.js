$(document).ready(function() {
   $('#splash-arrow').click(function() {
      $('html, body').animate({
         scrollTop: $('#introduction').offset().top
      }, 800);
   });

   $(window).scroll(function() {
      var scrollCenter = $(window).scrollTop() + $(window).height()/2;

      var html    = $('#html .animated');
      var css     = $('#css .animated');
      var js      = $('#js .animated');

      var htmlText= $('#html .anim-left');
      var cssText = $('#css .anim-left');
      var jsText  = $('#js .anim-left');

      var htmlIcon= $('#html .anim-right');
      var cssIcon = $('#css .anim-right');
      var jsIcon  = $('#js .anim-right');

      var html    = $('#html .animated');
      var css     = $('#css .animated');
      var js      = $('#js .animated');

      var htmlPos = $('#html').offset().top + $('#html').height()/4;
      var cssPos  = $('#css').offset().top + $('#css').height()/4;
      var jsPos   = $('#js').offset().top + $('#js').height()/4;

      if (scrollCenter >= htmlPos) {
         html.css("visibility", "visible");
         htmlText.addClass("slideInLeft");
         htmlIcon.addClass("slideInRight");
      }
      if (scrollCenter >= cssPos) {
         css.css("visibility", "visible");
         cssText.addClass("slideInLeft");
         cssIcon.addClass("slideInRight");
      }
      if (scrollCenter >= jsPos) {
         js.css("visibility", "visible");
         jsText.addClass("slideInLeft");
         jsIcon.addClass("slideInRight");
      }
   });
});

function flyIn (elem) {
   var $elem   = $(elem);
   var winWidth= $(window).width();
   var eOffset = $elem.offset();
   var eWidth  = $elem.width();

   var endPos  =

   $elem.animate({left: endPos}, 800, swing);
}
