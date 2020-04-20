
var canvas =document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext('2d');



document.body.style.backgroundColor = "#225c22";
var x= Math.random()*innerWidth;
var y= Math.random()*innerHeight;
var speed=5;
var dx=speed;
var dy=speed;
var radius=7;
var p = 4, a = 0 , racket, ball;
var audio = new Audio('pong.mp3');
var rackerping = new Audio('racket.mp3');
l=0;
c.fillStyle
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
c.beginPath();
c.fillStyle='white';  
c.font= "25px Arial";
c.fill();



racket =innerWidth/2+a;
ball = x;

points = "To level up: "+p +' Speed: '+speed+" Level: "+l +" a: "+a + " ball: "+ ball.toFixed(0) +" racket: "+racket;
c.fillText(points ,10,20);
if (p==0){
    l++
    p=4;
    speed= speed + 6;
}


c.fillStyle='#34bbbc';//racket
c.arc(x,y,radius,0,Math.PI *2,false);
c.stroke();
c.fill();

//center
c.fillStyle='white';//center
c.fillRect(-10, innerHeight/2, innerWidth-5, 5);
c.fillRect(0, 2, 5, innerHeight- 5);
c.fillRect(canvas.width-20, 2, 5, innerHeight- 5);
c.fill();

//racket
c.fillStyle='#34bbbc';//racket
c.strokeStyle='black'
c.fillRect(innerWidth/2+a, innerHeight-20, 100, 10);
c.strokeRect(innerWidth/2+a, innerHeight-20, 100, 10);
c.fillStyle='#f7c70c';//ball
c.fill();
c.strokeStyle='black'
c.stroke();



document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 39:
          a= a+50;
          break;

      case 37:
          a=a -50;
          break;

  }
};



if (x+radius > innerWidth-30 || x-radius < 10 ) {
    dx = -dx;
    audio.load();
    audio.play();
} else if ( y-radius < 0){
    audio.load();
    audio.play();
    dy = -dy;
    p--;

} else if (y-radius > innerHeight-30 && racket < ball && (racket+100) > ball){
    dy=-dy;
    rackerping.load();
    rackerping.play();

} else if(y-radius > innerHeight-10){
  c.font= "bold 50px Arial";
  c.fillText("You lose" , 340,350);
  c.strokeText();

}

y+=dy;
x+= dx;  



}
setTimeout(animate(), 100);





