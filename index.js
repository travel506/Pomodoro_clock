var min=20;
var break_min=5;
var timeout;
document.getElementById("starttime").innerHTML=min+" min";
document.getElementById("breaktime").innerHTML=break_min+" min";
document.getElementById("sessp").innerHTML=min+":00";
function start()
 {
     if(min==0 || seconds<=0)
     {
       var r= document.getElementById("text");
       r.innerHTML="Break !";
       r.style.color='rgb(211, 107, 37)';
      breaktime();
     }
     else
     {
       var r= document.getElementById("text");
       r.innerHTML="Session 1";
       
    var seconds = 60;
    var mins = min; 
    function tick()
     {
        if(min==0 || seconds<=0)
        {
          var r= document.getElementById("text");
          r.innerHTML="Break !";
          r.style.color='rgb(211, 107, 37)';
         breaktime();
        }
        else
        {
        var counter = document.getElementById("sessp");
        var current_min = mins-1;
        seconds--;
        counter.innerHTML =
        current_min.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        document.getElementById("sess-").disabled = true;
        document.getElementById("sess+").disabled = true;
        document.getElementById("break-").disabled = true;
        document.getElementById("break+").disabled = true;

        if(min==0 || seconds<=0)
        {
          var r= document.getElementById("text");
          r.innerHTML="Break !";
          r.style.color='rgb(211, 107, 37)';
         breaktime();
        }

        if( seconds > 0 )
        {
            timeout=setTimeout(tick, 1000);
        }
         else 
        {
            if(mins > 1)
            {
              setTimeout(function ()
               { 
                   countdown(mins - 1); 
                }, 100);
            }
        }
    }
    }
    tick();
    }
}

function reset1()
{
    location.reload();
}
 
function decsession()
{
if(min>1)
{
    min=min-1;
    
    var c1=document.getElementById("starttime");
    c1.innerHTML=min+" min";
}
else{}
}

function incsession()
{
if(min<60)
{
    min=min+1;
    var c1=document.getElementById("starttime");
    c1.innerHTML=min+" min";
}

else{}
}

function decbreak()
{
if(break_min>1)
{
    break_min=break_min-1;
    var c1=document.getElementById("breaktime");
    c1.innerHTML=break_min+" min";
}
else{}
}

function incbreak()
{
if(break_min<60)
{
    break_min=break_min+1;
    var c1=document.getElementById("breaktime");
    c1.innerHTML=break_min+" min";
}

else{}
}


function breaktime()
{
    var seconds = 60;
    var mins = break_min; 
    function tick()
     {
        if(break_min==0 || seconds==00)
        {
            breaktime();
        }
        else{
        var counter = document.getElementById("sessp");
        var current_min = mins-1;
        seconds--;
        counter.innerHTML =
        current_min.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        counter.style.color='rgb(211, 107, 37)';
        document.getElementById("sess-").disabled = true;
        document.getElementById("sess+").disabled = true;
        document.getElementById("break-").disabled = true;
        document.getElementById("break+").disabled = true;

        if(break_min==0 || seconds==00)
        {
            breaktime();
        }

        if( seconds > 0 )
        {
            timeout=setTimeout(tick, 1000);
        }
         else 
        {

            if(break_min==0 || seconds==00)
        {
            breaktime();
        }
            if(mins > 1)
            {
              setTimeout(function ()
               { 
                   countdown(mins - 1); 
                }, 1000);
            }
        }
    }
    }
    tick();
}
