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

    var hero = "";
    var enemy = "";
    var darthHp = Math.floor((Math.random())*100) + 102;
    var lukeHp  = Math.floor((Math.random())*100) + 102;
    var yodaHp  = Math.floor((Math.random())*100) + 102;
    var hanHp   = Math.floor((Math.random())*100) + 102;
    var darth = "Darth Vader";
    var luke = "Luke Skywalker";
    var yoda = "Yoda";
    var han = "Han Solo";

    var yourAttack = 0;
    var enemyAttack = 0;
    var yourHealth  = 1;
    var enemyHealth = 1;
 
$(document).ready(function(){
   
              game();
              restart();
                          
              
                
      
});



function restart() {

$(".restart").on("click", function() {
    location.reload();
   }); 
}



function game() {

                   

    yourAttack = Math.floor((Math.random())* 20) + 10;
    enemyAttack = Math.floor((Math.random())* 20) + 20;
    $(".enemy1").hide(); $(".enemy2").hide(); $(".enemy3").hide(); $(".myHero").hide();$(".currentEnemy").hide();
    //console.log("Darth = "+darthHp+ " Luke = "+lukeHp+" Yoda = "+yodaHp+ " Han = "+hanHp);
    //console.log("YourAttack = "+yourAttack + " EnemyAttack = "+enemyAttack);
    $(".restart").hide();
    document.getElementById("darthHp").innerHTML = darthHp;
    document.getElementById("lukeHp").innerHTML = lukeHp;
    document.getElementById("yodaHp").innerHTML = yodaHp;
    document.getElementById("hanHp").innerHTML = hanHp;

    $("#darth").on("click", function() {
        
        $("#darth").clone().appendTo( ".currentHero" );
       $("#darth").hide();
        $(".myHero").show();
        $(".enemy1").show(); $(".enemy2").show(); $(".enemy3").show();
        $("#luke").clone().appendTo( ".enemy1" );
        $("#yoda").clone().appendTo( ".enemy2" );
        $("#han").clone().appendTo( ".enemy3" );
       $("#allCharacters").hide();
        hero=darth;
        
        yourHealth =  darthHp;
        document.getElementById("darthHp").innerHTML = yourHealth;
       
        //console.log(darthHp);
       // document.getElementById("darthHp").innerHTML = yourHealth;
        
      });     
    
      $("#luke").on("click", function() {
        
        $("#luke").clone().appendTo( ".currentHero" );
        $("#luke").hide();
        $(".myHero").show();
        $(".enemy1").show(); $(".enemy2").show(); $(".enemy3").show();
        $("#darth").clone().appendTo( ".enemy1" );
        $("#yoda").clone().appendTo( ".enemy2" );
        $("#han").clone().appendTo( ".enemy3" );
        $("#allCharacters").hide();
        hero=luke;
        yourHealth = lukeHp;
        //document.getElementById("lukeHp").innerHTML = yourHealth;
      }); 

      $("#yoda").on("click", function() {
        
        $("#yoda").clone().appendTo( ".currentHero" );
        $("#yoda").hide();
        $(".myHero").show();
        $(".enemy1").show(); $(".enemy2").show(); $(".enemy3").show();
        $("#darth").clone().appendTo( ".enemy1" );
        $("#luke").clone().appendTo( ".enemy2" );
        $("#han").clone().appendTo( ".enemy3" );
        $("#allCharacters").hide();
        hero=yoda;
        yourHealth = yodaHp;
        //document.getElementById("yodaHp").innerHTML = yourHealth;
      }); 

      

      $("#han").on("click", function() {
        
        $("#han").clone().appendTo( ".currentHero" );
        $("#han").hide();
        $(".myHero").show();
        $(".enemy1").show(); $(".enemy2").show(); $(".enemy3").show();
        $("#darth").clone().appendTo( ".enemy1" );
        $("#luke").clone().appendTo( ".enemy2" );
        $("#yoda").clone().appendTo( ".enemy3" );
        $("#allCharacters").hide();
        hero=han;
        yourHealth = hanHp;
       // document.getElementById("hanHp").innerHTML = yourHealth;
      }); 

      
            $(".enemy1").on("click", function() {
                if(hero===darth && $(".currentEnemy").find('img').length===0)
                {
                    $("#luke").clone().appendTo(".currentEnemy").addClass("img-thumbnail-enemy");
                    $(".enemy1").remove();
                    $(".currentEnemy").show();
                    $(".score").empty();
                    //$("#enemy").remove();
                    enemy = luke;
                    enemyHealth = lukeHp;
                    //console.log("img =" + $(".currentEnemy").find('img').length);
                    
                }else if((hero===luke || hero===yoda || hero===han) && $(".currentEnemy").find('img').length===0)
                {
                    $("#darth").clone().appendTo(".currentEnemy");
                    $(".enemy1").remove();
                    $(".currentEnemy").show();
                    $(".score").empty();
                    enemy = darth;
                    enemyHealth = darthHp;
                   
                }
            });

            
            $(".enemy2").on("click", function() {
                if((hero===darth || hero===luke)&& $(".currentEnemy").find('img').length===0)
                {
                    $("#yoda").clone().appendTo(".currentEnemy");
                    $(".enemy2").remove();
                    $(".currentEnemy").show();
                    $(".score").empty();
                    enemy = yoda;
                    enemyHealth = yodaHp;
                }else if ((hero===yoda|| hero===han)&& $(".currentEnemy").find('img').length===0)  
                {
                    $("#luke").clone().appendTo(".currentEnemy");
                    $(".enemy2").remove();
                    $(".currentEnemy").show();
                    $(".score").empty();
                    enemy = luke;
                    enemyHealth = lukeHp;
                }

            });
            

            $(".enemy3").on("click", function() {
                if((hero===darth || hero===luke || hero===yoda) && $(".currentEnemy").find('img').length===0)
                {
                    $("#han").clone().appendTo(".currentEnemy");
                    $(".enemy3").remove();
                    $(".currentEnemy").show();
                    $(".score").empty();
                    enemy = han;
                    enemyHealth = hanHp;
                }else if ( (hero===han) && $(".currentEnemy").find('img').length===0)  
                {
                    $("#yoda").clone().appendTo(".currentEnemy");
                    $(".enemy3").remove();
                    $(".currentEnemy").show();
                    $(".score").empty();
                    enemy = yoda;
                    enemyHealth = yodaHp;
                }        

             });

             
                $("#attack").on("click",function(){
                    
                    if($(".currentEnemy").find('img').length===0 && $(".currentHero").find('img').length===0 )
                    {
                        $(".score").text("Please Select Your Chracter and Opponent Before Attacking");
                    }else if ($(".allEnemy").find('img').length===0 && $(".currentEnemy").find('img').length===0 )
                    {
                        $(".score").text("You have cleared the arena hence you are the true Star!!");
                        $(".restart").show();
                    }else if ($(".currentEnemy").find('img').length===0)
                    {
                        $(".score").text("Please Select Your Opponent Before Attacking");
                    }else if (yourHealth>=0 && enemyHealth>0)
                    {
                        if(hero===darth) { $("#darth").text(yourHealth); } else if(hero===luke){ $("#luke").text(yourHealth); } else if(hero===yoda){ $("#yoda").text(yourHealth); } else if(hero===han){ $("#han").text(yourHealth); }
                        if(enemy===darth){ $("#darth").text(enemyHealth); } else if(enemy===luke) { $("#luke").text(enemyHealth); } else if(enemy===yoda){ $("#yoda").text(enemyHealth); } else if(enemy===han){ $("#han").text(enemyHealth); }
                       
                        //$("#darth").append(yourHealth);
                       // $("#darthHp").append("#hero");
                        yourHealth -= enemyAttack;
                        enemyHealth -= yourAttack;
                        yourAttack = yourAttack + 30;
                        $(".score").text("You attacked "+ enemy+" for "+yourAttack+" Damage");
                        $("<div>").appendTo(".score").text(enemy+" attacked you back for "+enemyAttack+" Damage");
                       // console.log("yourHealth = "+yourHealth+" && enemyHealth = "+enemyHealth);
                       
                        //document.getElementById("darthHp").innerHTML = yourHealth;
                       // document.getElementById("lukeHp").innerHTML = enemyHealth;
                        if(hero===darth)
                        {
                            document.getElementById("darthHp").innerHTML = yourHealth;
                        }else if (hero===luke)
                        {
                            document.getElementById("lukeHp").innerHTML = yourHealth;
                        }else if (hero===yoda)
                        {
                            document.getElementById("yodaHp").innerHTML = yourHealth;
                        }else if (hero===han)
                        {
                            document.getElementById("hanHp").innerHTML = yourHealth;
                        }                 
                                if(enemy===darth)
                                {
                                    document.getElementById("darthHp").innerHTML = enemyHealth;
                                }else if (enemy===luke)
                                {
                                    document.getElementById("lukeHp").innerHTML = enemyHealth;
                                }else if (enemy===yoda)
                                {
                                    document.getElementById("yodaHp").innerHTML = enemyHealth;
                                }else if (enemy===han)
                                {
                                    document.getElementById("hanHp").innerHTML = enemyHealth;
                                }     

                        
                    }else if (yourHealth<=0 && enemyHealth>0)
                    {
                        $(".score").text("You have been Defeated. Game Over!!");
                        $(".restart").show();

                    }else if (enemyHealth<=0 && yourHealth>0)
                    {
                        $(".score").text("You Win!! Yayyyy...!!");
                        $(".currentEnemy").empty();
                        $(".currentEnemy").hide();
                        enemyAttack = Math.floor((Math.random())* 20) + 20;
                    }else if (enemyHealth<=0 && yourHealth<=0)
                    {
                        $(".score").text("You both are dead. Match is Draw. Game Over!!");
                        $(".restart").show();
                       // $(".currentEnemy").empty();
                        //$(".currentEnemy").hide();          
                    }

                });

                

}






/*var game={ 
       yourHp: yourHealth,
       enemyHp: enemyHealth,

       attack:function(){

       },
        
    
    

       

    };*/