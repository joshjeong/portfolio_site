var FINISHLINE = "830px"

var pView = function(){};

pView.prototype = {
  update: function(player, newPosition){
    player.css('left', newPosition)
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

  hideResult:  function(){
    $('#gameover').hide();
  },

  resetPlayers:  function(player1, player2){
    player1.css('left', 0)
    player2.css('left', 0)
  }

}



var pController = function(pokemonView){
  this.pokemonView = pokemonView,
  this.player1 = $('#player1'),
  this.player2 = $('#player2');
};


pController.prototype = {
  bindkeys: function(e){
    if(e.keyCode == 65){
      var position = this.currentPosition(this.player1);
      this.move(this.player1, position)
      this.zindex()
      this.moveGrass()
    }
    else if(e.keyCode == 76){
      var position = this.currentPosition(this.player2);
      this.move(this.player2, position)
      this.zindex()
      this.moveGrass()
    }
  },

  currentPosition: function(player){
    return parseInt(player.css("left"))
  },

  move: function(player, position){
    var newPosition= position + 20 + "px"
    if(parseInt(newPosition) >= parseInt(FINISHLINE)){
      this.pokemonView.gameover(player);
      setTimeout(this.reset, 3000);
    }
    else{
      this.pokemonView.update(player, newPosition)
    }
  },

  zindex: function(){
    var player1Pos= parseInt(this.player1.css('left')),
        player2Pos= parseInt(this.player2.css('left'));
    if(player1Pos > player2Pos){
      this.player1.css('z-index', player1Pos + 1)
    }
    else{
      this.player2.css('z-index', player2Pos + 1)
    }
  },

  moveGrass: function(){
    var grassPos= parseInt($('#front-grass').css('left'))
    $('#front-grass').css('left', grassPos-2)
  },

  resetGrass: function(){
    $('#front-grass').css('left', 0)
  },

  reset: function(){
    var self = this;
    self.pokemonView.hideResult();
    self.pokemonView.resetPlayers(this.player1, this.player2);
    self.resetGrass();
  }
};
