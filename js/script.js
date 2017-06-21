//business logic
var totalPoints =0;
function gameScore(name){
  this.name =name;
  this.score=0;
}
gameScore.prototype.namePlayer = function () {
  return this.name;
};
gameScore.prototype.addingScore = function () {
  var points =Math.floor((Math.random() * 6) + 1);
  if (points===1) {
   alert("Your turn is over, switch to next player");
   this.score-=totalPoints;
   totalPoints=0;
   $("button#role1").toggle();
   $("button#role2").toggle();
   $("button#hold1").toggle();
   $("button#hold2").toggle();

  }else{
    this.score+=points;
    totalPoints  +=  points;
  }
};


// user interface logic
$(document).ready(function(){
  // player one code for the rolling the die
  $(".player1").submit(function(event){
    event.preventDefault();
     $(this).closest('form').find("input").prop('disabled', true);
    var player1 = $("#playerOne").val();
    // var scorePlayer1 = 0;

    var score1 = new gameScore( player1);

    $("#addPlayer").attr("disabled", true);

    $("button#role1").click(function(){
      score1.addingScore();
      $(".resultPlayer1").text(score1.score);
      score1.namePlayer();
      if (score1.score>=100) {
        $(".winner").append(score1.name);
      }
    });
    $("button#hold1").click(function(){
      //alert("Your turn is over, switch to next player");
      $("button#role1").hide();
      $("button#role2").show();
      $("button#hold1").hide();
      $("button#hold2").show();
      totalPoints=0;
    });

  });

// player two code for the rolling the die
    $(".player2").submit(function(event){
      event.preventDefault();
       $(this).closest('form').find("input").prop('disabled', true);
      var player2 = $("#playerTwo").val();

      var score2 = new gameScore(player2);

      $("#addPlayer2").attr("disabled", true);

      $("button#role2").click(function(){
        score2.addingScore();
        console.log(score2.score);
        $(".resultPlayer2").text(score2.score);
        score2.namePlayer()
        if (score2.score>=100) {
           $(".winner").append(score2.name);
       }


      });
      $("button#hold2").click(function(){

        $("button#role1").show();
        $("button#role2").hide();
        $("button#hold1").show();
        $("button#hold2").hide();
        totalPoints=0;
      });

});
//
 });
