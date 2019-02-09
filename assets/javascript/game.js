//import { isValidLiteralValue } from "graphql";


// 1) Display four thumbmail of Star Wars Characters in document.ready function
/* 2) When user selects one character then that thumbmail comes below Your Character 
      and others below Enemies Available To Attack */
//2.5) If user click attack before selecting opponent then it displays "No enemy here" below Defender      
// 3) User select one character from Enemies Available to Attack which moves below Defender
// 4) When user click attack then it randomly decreases health of opponent as follows
//      "You attacked "opponentName" for 8 damage" below defendent 
//      "opponentName" attacked you back for 25 damage"
// 6) Repeat Step 4 until one of the character looses. Also AttackPower = AttackPower + 8; each time your charcter attacks.
// 7) If Your Character's health becomes zero first then Game Over
// 8) Else if opponent's health becaomes zero then the thumbmail disappears
// 9) Now Your Character can attack 2 more remaining character from Enemies Available To Attack
//10) Your character selects one more from 2 remaining character from Enemies Available To Attack
//11) Repeat Step 4 until one of the character looses.
//12) Now Your Character can attack 1 more remaining character from Enemies Available To Attack
//13) Your character selects last remaining character from Enemies Available To Attack
//14) Repeat Step 4 until one of the character looses.
//15) If your character's health remains above zero then wins & Game Over

var clickedYour = "";
    var enemy = "";
    var darthHp = Math.floor((Math.random())*100) + 102;
    var lukeHp  = Math.floor((Math.random())*100) + 102;
    var yodaHp  = Math.floor((Math.random())*100) + 102;
    var hanHp   = Math.floor((Math.random())*100) + 102;

$(document).ready(function(){
    
console.log("Darth = "+darthHp+ " Luke = "+lukeHp+" Yoda = "+yodaHp+ " Han = "+hanHp)
    $("#darth").on("click", function() {

        $("#darth").clone().appendTo( ".current" );
        $("#darth").hide();
        $("#luke").clone().appendTo( ".enemy1" );
        $("#yoda").clone().appendTo( ".enemy2" );
        $("#han").clone().appendTo( ".enemy3" );
        $("#allCharacters").hide();
        clickedYour="darth";
      });     
    
      $("#luke").on("click", function() {
        
        $("#luke").clone().appendTo( ".current" );
        $("#luke").hide();
        $("#darth").clone().appendTo( ".enemy1" );
        $("#yoda").clone().appendTo( ".enemy2" );
        $("#han").clone().appendTo( ".enemy3" );
        $("#allCharacters").hide();
        clickedYour="luke";
      }); 

      $("#yoda").on("click", function() {
        
        $("#yoda").clone().appendTo( ".current" );
        $("#yoda").hide();
        $("#darth").clone().appendTo( ".enemy1" );
        $("#luke").clone().appendTo( ".enemy2" );
        $("#han").clone().appendTo( ".enemy3" );
        $("#allCharacters").hide();
        clickedYour="yoda";
      }); 

      

      $("#han").on("click", function() {
        
        $("#han").clone().appendTo( ".current" );
        $("#han").hide();
        $("#darth").clone().appendTo( ".enemy1" );
        $("#luke").clone().appendTo( ".enemy2" );
        $("#yoda").clone().appendTo( ".enemy3" );
        $("#allCharacters").hide();
        clickedYour="han";
      }); 


      $(".enemy1").on("click", function() {
        if(clickedYour==="darth")
        {
            $("#luke").clone().appendTo(".defender");
            $(".enemy1").hide();
            enemy = "luke"
        }else if(clickedYour==="luke" || clickedYour==="yoda" || clickedYour==="han")
        {
            $("#darth").clone().appendTo(".defender");
            $(".enemy1").hide();
            enemy = "darth"
        }
      });


      $(".enemy2").on("click", function() {
        if(clickedYour==="darth" || clickedYour==="luke")
        {
            $("#yoda").clone().appendTo(".defender");
            $(".enemy2").hide();
            enemy = "yoda"
        }else if (clickedYour==="yoda"|| clickedYour==="han")  
        {
            $("#luke").clone().appendTo(".defender");
            $(".enemy2").hide();
            enemy = "luke"
        }

      });

      $(".enemy3").on("click", function() {
        if(clickedYour==="darth" || clickedYour==="luke" || clickedYour==="yoda")
        {
            $("#han").clone().appendTo(".defender");
            $(".enemy3").hide();
            enemy = "han"
        }else if ( clickedYour==="han")  
        {
            $("#yoda").clone().appendTo(".defender");
            $(".enemy3").hide();
            enemy = "yoda"
        }

      });
     
      
});

var game={ 
        health: 0,

        
    

    };