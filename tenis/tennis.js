
const canvas =document.querySelector('canvas');
canvas.width=340;
canvas.height=600;
let c = canvas.getContext('2d');
var x= 100;
var y= 100;
var speed=3;
var dx=speed;
var dy=speed;
var radius=3.5;
var l=0 ,p = 0, a = 200 , racket, ball;
var ping = new Audio('snd/pong.mp3');
var pong = new Audio('snd/racket.mp3');
var racket, ball, bally;
let start = false;


function ballmove(){
    
    c.beginPath();
    c.lineWidth=0;
    c.fillStyle='#f7c70c';
    c.arc(x,y,radius,0,Math.PI *2,false);
    c.fill();
    c.closePath();
  
    y+=dy;
    x+= dx;  

}
function drawtable(){
    c.beginPath();
    c.fillStyle='#225c22';//center
    c.fillRect(0, 0, 400, 600);
    c.fill();
    c.fillStyle='white';//center
    c.fillRect(0, 600/2-2, 340, 4);
    c.strokeStyle= 'white'
    c.lineWidth=4;
    c.strokeRect(2, 2, 336,596);
    c.stroke();
    //c.lineWidth=1;

}
function stats(){
    racket =a;
    ball = x;
    c.font='10px Arial';
    c.fillStyle= 'white'
    points = "Points: "+p + ' racket: '+racket +' ball: '+ball;
    c.fillText(points ,15,25);
}

function racketmove(){

    if (racket > 160){

        var img1 = new Image();
        img1.src = 'img/racket50r.png';
        c.drawImage(img1,a, 570 )
        
        } else {
        var img2 = new Image();
        img2.src = 'img/racket50.png';
        c.drawImage(img2,a, 570 )
        }

        document.onkeydown = function(e) {
            switch (e.keyCode) {
                case 39:
                    a= a+30;
                    racket=a;
                    break;
          
                case 37:
                    a=a-30;
                    racket=a;
                    break;

                case 13:
                    start=true;  
                    animate(); 
                    break;

                case 27:
                    start=false;
                    break;
            }
          };
    if (racket<0){racket=0;}
    if (racket>300){racket=300;}

    document.onmousedown = function(e){

        a = event.clientX-25;
      
      }

}



function gameplay(){
    if (x-radius > 360-30 || x+radius < 10 ) {
        dx = -dx;
        ping.load();
        ping.play();
    } else if ( y-radius < 0){
        pong.load();
        pong.play();
        dy = -dy;
        p++;
        l++;   
    } else if (y-radius > 575 && y-radius < 590 && a < ball && a+60 > ball){
        dy=-dy;
        //dx=-dx;
        pong.load();
        pong.play();
    } else if(y+radius > 610){
        start = false;
        x=0,y=0;
        menu();
    }
}

function speedup(){
    if (l == 4 ){
      speed ++;
      dy = (dy *8)/7;
      l=0;
       }
}

 function reload(){
    location.reload(); 
 }

function clear(){
    c.clearRect(0, 0, canvas.width, canvas.height);

}
function reset(){
    x=100,y=100;
}

function animate(){
    
    speedup();  
    clear();    
    drawtable();
    stats();
    gameplay();
    racketmove(); 
    ballmove();
    requestAnimationFrame(animate);
}

if (start == true){ 
    reset(); 
    animate();
 } else {
      menu();
     }


function menu(){
   
    clear();
    drawtable();
    racketmove(); 


    c.fillStyle= 'orange';
    c.font= '20px Arial';
    c.fillText("Play with arrow keys", 70,30);
    c.fillText("Or play with mouse", 75,60);
    

    c.fillStyle= 'orange';
    c.font= '30px Arial';
    c.fillText("Press enter to Play", 40,200);
    //if (e.)
    canvas.addEventListener('onclick', onmouseclick, false);

    c.fill();



}

function onmouseclick(){
    document.onmousedown = function(){

        start=true;
        animate();  
      }
    
}




