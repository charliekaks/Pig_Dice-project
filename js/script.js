//business logic
function gameScore(name,score){
  this.name =name;
  this.score = score;
}
gameScore.prototype.namePlayer = function () {
  return this.name;
};
gameScore.prototype.addingScore = function (points) {

      if (Math.floor((Math.random() * 6) + 1)===1) {
        return alert("Switch players");


      }else {
        return this.score += Math.floor((Math.random() * 6) + 1);
      }
};

// user interface logic
$(document).ready(function(){
  // player one code for the rolling the die
  $(".player1").submit(function(event){
    event.preventDefault();
     $(this).closest('form').find("input").prop('disabled', true);
    var player1 = $("#playerOne").val();
    var scorePlayer1 = parseInt(0);

    var score1 = new gameScore( player1,scorePlayer1);

    $("#addPlayer").attr("disabled", true);

    $("button#role1").click(function(){
        console.log(score1.namePlayer(player1));
        console.log(score1.addingScore());
      $(".resultPlayer1").text(score1.addingScore());
      if (score1.addingScore()===100) {
        alert(score1.namePlayer(player1) + " You have won!!!");
      }



    });
  });

// player two code for the rolling the die
  $(".player2").submit(function(event){
    event.preventDefault();

    $(this).closest('form').find("input").prop('disabled', true);

    var player2 = $("#playerTwo").val();
    var scorePlayer2 = 0;

    var score2 = new gameScore(player2, scorePlayer2);
    $("#addPlayer2").attr("disabled", true);

    $("button#role2").click(function(){
      $(".resultPlayer2").text(score2.addingScore(scorePlayer2));

    });
  });
//
 });
