$(document).on('ready', function () {
  var pokemonController = new Pokemon.Controller,
      view = new View,
      controller = new Controller(view);
  $(document).on('keyup', function(e){
    pokemonController.bindkeys(e);
  })
  controller.scrollTo();
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
  this.view = view;
}

Controller.prototype = {
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
  },

  bindListeners: function(){
    this.louderListener();
    this.ledgerListener();
    this.playlistenListener();
  },

  louderListener: function(){
    var self = this;
    $('#louder').on('mouseover', function(){
      self.view.showLouder($(this))
    });
    $('#louder').on('mouseout', function(){
      self.view.hideLouder($(this))
    })
  },

  ledgerListener: function(){
    var self = this;
    $('#ledger').on('mouseover', function(){
      self.view.showLedger($(this))
    });
    $('#ledger').on('mouseout', function(){
      self.view.hideLedger($(this))
    })
  },

  playlistenListener: function(){
    var self = this;
    $('#playlisten').on('mouseover', function(){
      self.view.showPlaylisten($(this))
    });
    $('#playlisten').on('mouseout', function(){
      self.view.hidePlaylisten($(this))
    })
  }
};

var View = function(){}

View.prototype = {
  animateArrow: function(){
    $('#arrow').animate('bounce', {times: 5}, 300);
  },

  showLouder: function(div){
    $('.louder-overlay').slideDown("slow")
    $('#louder-caption').show()
  },

  hideLouder: function(div){
    $('.louder-overlay').slideUp("slow")
    $('#louder-caption').hide()
  },

  showLedger: function(div){
    $('.ledger-overlay').slideDown("slow")
    $('#ledger-caption').show()
  },

  hideLedger: function(div){
    $('.ledger-overlay').slideUp("slow")
    $('#ledger-caption').hide()
  },

  showPlaylisten: function(div){
    $('.playlisten-overlay').slideDown("slow")
    $('#playlisten-caption').show()
  },

  hidePlaylisten: function(div){
    $('.playlisten-overlay').slideUp("slow")
    $('#playlisten-caption').hide()
  }
};


