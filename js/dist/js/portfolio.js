$(document).on('ready', function () {
  var pokemonView = new pView();
      pokemonController = new pController(pokemonView);
      view= new View;
      controller = new Controller(view);
  $(document).on('keyup', function(e){
    pokemonController.bindkeys(e);
  })
  controller.scrollTo();
  // controller.bindListeners();
  view.animateArrow();
  if ($('#trigger').css('opacity')== "0"){
     var s = skrollr.init({
            render: function(data){
              console.log(data.curTop)
            }
     });
  }


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
            }, 3000);
            return false;
          }
        }
      });
    });
  }

  this.bindListeners= function(){
    this.louderListener();
    this.ledgerListener();
    this.playlistenListener();
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

  this.playlistenListener= function(){
    $('#playlisten').on('mouseover', function(){
      self.view.showPlaylisten($(this))
    });
    $('#playlisten').on('mouseout', function(){
      self.view.hidePlaylisten($(this))
    })
  }


}

var View = function(){
  this.animateArrow= function(){
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
  this.showPlaylisten = function(div){
    $('.playlisten-overlay').slideDown("slow")
    $('#playlisten-caption').show()
  }
  this.hidePlaylisten = function(div){
    $('.playlisten-overlay').slideUp("slow")
    $('#playlisten-caption').hide()
  }


}


