var count=0;
var counter=0;
function clickzz() {
      document.getElementById("audio").play();
       counter=0;
       swap();
    
    
    document.getElementById("pa").className='unhidden'; 
    var randomX1 = Math.ceil(Math.random() * 10);
    var randomX2 = Math.ceil(Math.random() * 10);
    var randomX3 = Math.ceil(Math.random() * 10 );

    document.getElementById("randomX1").innerHTML = randomX1;
    document.getElementById("randomX2").innerHTML = randomX2;
    document.getElementById("randomX3").innerHTML = randomX3;

    var t = "SPIN AGAIN!";
    if (randomX1 === randomX2) {
    if(randomX2 === randomX3)
   { count++;

        var t = "JackPOt!!!";
      document.getElementById("score").innerHTML=count;
        }
    }


    var chance = t;
    function clickChance() {
        document.getElementById("chance").innerHTML = t;
    }
    document.getElementById('pa').innerHTML = t;

};

function swap()
{

var t=Math.floor(Math.random() * 10);
var x=Math.floor(Math.random() * 10);
var j=Math.floor(Math.random() * 10);
document.getElementById("randomX1").innerHTML = t;
document.getElementById("randomX2").innerHTML = x;
document.getElementById("randomX3").innerHTML = j;

if(counter<=20)
{requestAnimationFrame(swap);
counter++;

}


}
function reset()
{
document.getElementById("score").innerHTML=0;
} 
