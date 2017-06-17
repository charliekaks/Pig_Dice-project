//business logic
function gameScore(name,score){
  this.name =name;
  this.score = score;
}
gameScore.prototype.addingScore = function (score) {
  return this.score+=Math.floor((Math.random()*6)+1);
};
// user interface logic
$(document).ready(function(){
  $(".player1").submit(function(event){
    event.preventDefault();
    var player1 = $("#playerOne").val();
    console.log(player1);

    $("button#role1").click(function(){
      var score1 = new gameScore( player1,0);
      console.log("error");
      console.log(score1.addingScore());

    });
  });


  $(".player2").submit(function(event){
    event.preventDefault();
    var player2 = $("#playerTwo").val();
    $("button#role2").click(function(){

    });
  });

});
