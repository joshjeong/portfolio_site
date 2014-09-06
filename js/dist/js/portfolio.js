$(document).on('ready', function () {
  var view= new View
  var controller = new Controller(view)
  controller.scrollTo();
  controller.bindListeners();
})


var Controller = function(view){
  self = this
  this.view = view

  this.scrollTo = function(){
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
  }

  this.bindListeners= function(){
    this.hoverListener();
  }

  this.hoverListener= function(){
    $('#louder').on('mouseover', function(){
      self.view.showDetails($(this))
    })
  }


}

var View = function(){
  this.showDetails = function(div){
    console.log('hi')
    $('.louder-overlay').slideDown("slow")
  }
}


