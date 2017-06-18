//business logic
function gameScore(name,score){
  this.name =name;
  this.score = score;
}

// user interface logic
$(document).ready(function(){
  $(".player1").submit(function(event){
    event.preventDefault();
     $(this).closest('form').find("input").prop('disabled', true);

    var player1 = $("#playerOne").val();
    var scorePlayer1 = 0;

    var score1 = new gameScore( player1,scorePlayer1);

    $("#addPlayer").attr("disabled", true);



    $("button#role1").click(function(){


    });
  });


  $(".player2").submit(function(event){
    event.preventDefault();

    $(this).closest('form').find("input").prop('disabled', true);

    var player2 = $("#playerTwo").val();
    var scorePlayer2 = 0;

    var score2 = new gameScore(player2, scorePlayer2);
    $("#addPlayer2").attr("disabled", true);

    $("button#role2").click(function(){

    });
  });

});
