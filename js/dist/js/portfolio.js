$(document).on('ready', function () {

  // var scrollAnimationTime = 1200,
  //     scrollAnimation = 'easeInOutExpo';
  // $('a.scrollto').bind('click.smoothscroll', function (event) {
  //     event.preventDefault();
  //     var target = this.hash;
  //     $('html, body').stop().animate({
  //         'scrollTop': $(target).offset().top
  //     }, scrollAnimationTime, scrollAnimation, function () {
  //         window.location.hash = target;
  //     });
  // });


      if($(window).scrollTop() + $(window).height() >= $(document).height() - 500) {
           var _pos = $(window).scrollTop() + $(window).height() - $(document).height() - 500;
            $("#header").css({
              "background-position": "center " + _pos/2 + "px"
            });
       }


  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
        }
      }
    });
  });
})


