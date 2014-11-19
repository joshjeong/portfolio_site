var FINISHLINE = "830px",
    INCREMENT = 20

Pokemon.Controller = function(){
  this.player1 = $('#player1'),
  this.player2 = $('#player2'),
  this.view = new Pokemon.View(this.player1, this.player2)
};


Pokemon.Controller.prototype = {
  bindkeys: function(e){
    if(e.keyCode == 65){
      var position = this.currentPosition(this.player1);
      this.movePosition(this.player1, position)
      this.changeZindex()
      this.view.updateGrass()
    }
    else if(e.keyCode == 76){
      var position = this.currentPosition(this.player2);
      this.movePosition(this.player2, position)
      this.changeZindex()
      this.view.updateGrass()
    }
  },

  currentPosition: function(player){
    return parseInt(player.css("left"))
  },

  movePosition: function(player, position){
    var newPosition= position + INCREMENT + "px",
        self = this;
    if(parseInt(newPosition) >= parseInt(FINISHLINE)){
      this.view.gameover(player);
      this.view.resetGame();
    }
    else{
      this.view.updatePosition(player, newPosition)
    }
  },

  changeZindex: function(){
    var player1Pos= this.view.getPosition(this.player1),
        player2Pos= this.view.getPosition(this.player2);
    if(player1Pos > player2Pos){
      this.view.updateZindex(this.player1, player1Pos)
    }
    else{
      this.view.updateZindex(this.player2, player2Pos)
    }
  }
};


Pokemon.View = function(player1, player2){
  this.player1 = player1,
  this.player2 = player2
};

Pokemon.View.prototype = {
  updatePosition: function(player, newPosition){
    player.css('left', newPosition)
  },

  getPosition: function(player){
    return parseInt(player.css('left'))
  },

  updateZindex: function(player, pos){
    player.css('z-index', pos + 1)
  },

  gameover: function(player){
    if(player.attr('id')=='player1'){
      $('#avatar').css("background-image", "url('images/squirtle_wins.gif')")
    }
    else{
      $('#avatar').css("background-image", "url('images/charmander_wins.gif')")
    }
    $('#gameover').show();
  },

  hideResult: function(){
    $('#gameover').hide();
  },

  resetGame: function(){
    var self = this;
    setTimeout(function(){
      $('#gameover').hide();
      $('#player1').css('left', 0)
      $('#player2').css('left', 0)
      $('#front-grass').css('left', 0)
    }, 3000)
  },

  resetPlayers: function(){
    player1.css('left', 0)
    player2.css('left', 0)
  },

  updateGrass: function(){
    var grassPos= parseInt($('#front-grass').css('left'))
    $('#front-grass').css('left', grassPos-2)
  },

  resetGrass: function(){
    $('#front-grass').css('left', 0)
  }
}
