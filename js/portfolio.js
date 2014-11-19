$(document).on('ready', function () {
  var pokemonController = new Pokemon.Controller,
      controller = new Portfolio.Controller;
  controller.init();

  $(document).on('keyup', function(e){
    pokemonController.bindkeys(e);
  });

  if ($('#trigger').css('opacity')== "0"){
     var s = skrollr.init();
  };
})


Portfolio.Controller = function(){
  this.view = new Portfolio.View;
}

Portfolio.Controller.prototype = {
  init: function(){
    this.scrollTo();
    this.view.animateArrow();
  },

  scrollTo: function(){
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
            }, 3000);
            return false;
          }
        }
      });
    });
  }
};

Portfolio.View = function(){}

Portfolio.View.prototype = {
  animateArrow: function(){
    $('#arrow').animate('bounce', {times: 5}, 300);
  }
};