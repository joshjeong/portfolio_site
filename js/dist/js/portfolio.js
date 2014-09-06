$(document).on('ready', function () {
  var view= new View
  var controller = new Controller(view)
  controller.scrollTo();
  controller.bindListeners();
  view.animateArrow();
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
    this.louderListener();
    this.ledgerListener();
  }

  this.louderListener= function(){
    $('#louder').on('mouseover', function(){
      self.view.showLouder($(this))
    });
    $('#louder').on('mouseout', function(){
      self.view.hideLouder($(this))
    })
  }

  this.ledgerListener= function(){
    $('#ledger').on('mouseover', function(){
      self.view.showLedger($(this))
    });
    $('#ledger').on('mouseout', function(){
      self.view.hideLedger($(this))
    })
  }


}

var View = function(){
  this.animateArrow= function(){
    console.log('bounce')
    $('#arrow').animate('bounce', {times: 5}, 300);
  };

  this.showLouder = function(div){
    $('.louder-overlay').slideDown("slow")
    $('#louder-caption').show()
  }
  this.hideLouder = function(div){
    $('.louder-overlay').slideUp("slow")
    $('#louder-caption').hide()
  }
  this.showLedger = function(div){
    $('.ledger-overlay').slideDown("slow")
    $('#ledger-caption').show()
  }
  this.hideLedger = function(div){
    $('.ledger-overlay').slideUp("slow")
    $('#ledger-caption').hide()
  }


}


