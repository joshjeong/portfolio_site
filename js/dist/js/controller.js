

var Controller = function(view){
  this.view = view;
}

Controller.prototype = {
  doScroll: function(){
    this.view.smoothScroll();
  }

}
