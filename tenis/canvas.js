
var canvas =document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext('2d');
document.body.style.backgroundColor = "grey";
var x= Math.random()*innerWidth/2;
var y= Math.random()*innerHeight;
var speed=5;
var dx=speed;
var dy=speed;
var radius=7;
var l=0 ,p = 0, a = 0 , racket, ball;
var ping = new Audio('snd/pong.mp3');
var pong = new Audio('snd/racket.mp3');
l=0;




function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
c.beginPath();
c.fillStyle='white';  
c.font= "25px Arial";
c.fill();


c.fillStyle='#225c22';//table
c.fillRect(0, 0, innerWidth-15,innerHeight);

if (l == 4 ){
  speed ++;

dy = (dy *8)/7;
l=0;

}


racket =innerWidth/2+a;
ball = x;
c.fillStyle= 'white'
points = "Points: "+p ;
c.fillText(points ,15,25);


c.fillStyle='#34bbbc';//racket
c.arc(x,y,radius,0,Math.PI *2,false);
c.stroke();
c.fill();

//center
c.fillStyle='white';//center
c.fillRect(-10, innerHeight/2, innerWidth-5, 5);
//c.fillRect(0, 2, 5, innerHeight- 5);
//c.fillRect(canvas.width-20, 2, 5, innerHeight- 5);
//c.fillRect( 0 ,0,820, 3);
//c.fillRect( 0 ,innerHeight-5,820, 3);
c.fill();

//racket
if (racket < innerWidth/2){

var img1 = new Image();
img1.src = 'img/racketr.png';
c.drawImage(img1,innerWidth/2+a, innerHeight-50 )

} else{
var img2 = new Image();
img2.src = 'img/racket.png';
c.drawImage(img2,innerWidth/2+a, innerHeight-50 )
}
/*}else if (racket > innerWidth/2 && y<innerHeight){

  var img1r = new Image();
  img1r.src = 'revracketr.png';
  c.drawImage(img1r,innerWidth/2+a, innerHeight-50 )
  
  } else if (racket<innerWidth/2 && y<innerHeight/2){
  var img2r = new Image();
  img2r.src = 'revracket.png';
  c.drawImage(img2r,innerWidth/2+a, innerHeight-50 )
  
  }*/
c.fillStyle='#f7c70c';//ball
c.fill();
c.strokeStyle='black'
c.stroke();

document.onmousedown = function(e){

  a = event.clientX-400;

}

document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 39:
          a= a+50;
          break;

      case 37:
          a=a-50;
          break;
      case 13:
        location.reload(); 
          break;
  }
};



if (x+radius > innerWidth-30 || x-radius < 10 ) {
    dx = -dx;
    ping.load();
    ping.play();
} else if ( y-radius < 0){
    pong.load();
    pong.play();
    dy = -dy;
    p++;
    l++;

} else if (y-radius > innerHeight-40 && racket-20 < ball && (racket+110) > ball){
    dy=-dy;
    //dx=-dx;
    pong.load();
    pong.play();


} else if(y-radius > innerHeight){
  c.font= "bold 50px Arial";
  c.fillText("Your score is "+p+" points" , 140,350);
  c.strokeText("Your score is "+p+" points" , 140,350);
  c.fillText("Press enter to restart" , 150,420);
  c.strokeText("Press enter to restart" , 150,420);

  c=null;

}




y+=dy;
x+= dx;  

       

}

document.onkeydown = function(e) {
  
  switch (e.keyCode) {
   
      case 39:
          a= a+50;
          break;

      case 37:
          a=a-50;
          break;
      case 13:
        location.reload(); 
          break;
  }
};

animate();





