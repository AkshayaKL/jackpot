var count=0;
function clickzz() {
    
    document.getElementById("pa").className='unhidden'; 
    var randomX1 = Math.ceil(Math.random() * 10);
    var randomX2 = Math.ceil(Math.random() * 10);
    var randomX3 = Math.ceil(Math.random() * 10 );

    document.getElementById("randomX1").innerHTML = randomX1;
    document.getElementById("randomX2").innerHTML = randomX2;
    document.getElementById("randomX3").innerHTML = randomX3;

    var t = "Play again";
    if (randomX1 === randomX2) {
    if(randomX2 === randomX3)
   { count++;

        var t = "JackPOTTT!!!";
      document.getElementById("score").innerHTML=count;
        }
    }


    var chance = t;
    function clickChance() {
        document.getElementById("chance").innerHTML = t;
    }
    document.getElementById('pa').innerHTML = t;
};

