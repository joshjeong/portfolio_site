var FINISHLINE = "810px"

var pView = function(){
  this.update= function(player, newPosition){
    player.css('left', newPosition)
  } 

  this.gameover= function(player){
    if(player.attr('id')=='player1'){
      $('#avatar').css("background-image", "url('images/squirtle_wins.gif')")
    }
    else{
      $('#avatar').css("background-image", "url('images/charmander_wins.gif')")
    }
    $('#gameover').show();
  }

  this.hideResult = function(){
    $('#gameover').hide();
  }

  this.resetPlayers = function(player1, player2){
    player1.css('left', 0)
    player2.css('left', 0)
  }
}


var pController = function(pokemonView){
  var self = this;
      this.pokemonView = pokemonView
      player1 = $('#player1')
      player2 = $('#player2')

  this.bindkeys = function(e){
    if(e.keyCode == 65){
      position = this.currentPosition(player1)
      this.move(player1, position)
      this.zindex()
    }
    else if(e.keyCode == 76){
      position = this.currentPosition(player2)
      this.move(player2, position)
      this.zindex()
    }
  }

  this.currentPosition= function(player){
    return parseInt(player.css("left"))
  }

  this.move = function(player, position){
    newPosition= position + 20 + "px"
    if(parseInt(newPosition) >= parseInt(FINISHLINE)){
      this.pokemonView.gameover(player);
      setTimeout(this.reset, 3000);
    }
    else{
      this.pokemonView.update(player, newPosition)
    }
  }

  this.zindex = function(){
    var player1Pos= parseInt(player1.css('left'))
        player2Pos= parseInt(player2.css('left'))
    if(player1Pos > player2Pos){
      player1.css('z-index', player1Pos + 1)
    }
    else{
      player2.css('z-index', player2Pos + 1)
    }
  }

  this.reset = function(){
    self.pokemonView.hideResult();
    self.pokemonView.resetPlayers(player1, player2);
  }



}
