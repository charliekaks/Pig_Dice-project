var score =0;
function playerDetails(playerName,score){
  this.playerName = playerName;
  this.score = score;
}
playerDetails.prototype.score = function () {
  return score += Math.floor((Math.random()*6)+1);
};
  var pName1= $("#playerOne").val();
  var pName2= $("#playerTwo").val();
  var total = 0;
  var player1 = new playerDetails(pName1,0);
  var player2 = new playerDetails(pName2,0);
$(document).ready(function(){
  $("button#role1").click(function(){
      if (player1.score==1) {
        alert("switch to next player`");
      }else {
        player1.score += total;

      }
      console.log(total);
      $(".resultPlayer1").text(total);
  });
  $("button#role2").click(function(){

  });

});
