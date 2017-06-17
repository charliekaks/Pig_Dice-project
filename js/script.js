function gameScore(score){
  this.score = score;
}
score.prototype.addingScore = function () {
  return this.score+=Math.floor((Math.random()*6)+1);
};
$(document).ready(function(){
  $(".player1").submit(function(event){
    event.preventDefault();
    var player1 = $("#playerOne").val();
  });


  $(".player2").submit(function(event){
    event.preventDefault();
    var player2 = $("#playerTwo").val();
  });


  $("button#role1").click(function(){
    var score1 = new gameScore();
    if (true) {

    }

  });
  $("button#role2").click(function(){

  });
});
