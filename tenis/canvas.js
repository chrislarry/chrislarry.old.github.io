var canvas =document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext('2d');

document.body.style.backgroundColor = "#225c22";
document.getElementById('points').innerHTML =p;
var x= Math.random()*innerWidth;
var y= Math.random()*innerHeight;
var speed= 15;
var dx=(Math.random()-0.5)*speed;
var dy=(Math.random()-0.5)*speed;
var radius=7;
var p = 4 ;
var audio = new Audio('ping.mp3');

l=0;
c.fillStyle
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
c.beginPath();
c.fillStyle='white';  
c.font= "20px Arial";
c.fill();
points = "To level up: "+p +' Speed: '+speed;
c.fillText(points ,100,20);


level = "Level: "+l;
c.fillText(level ,20,20);
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
c.fillRect(innerWidth/innerWidth+50, innerHeight-20, 70, 10);
c.fillStyle='#f7c70c';//ball
c.fill();
if (x+radius > innerWidth-30 || x-radius < 10 ) {
    dx = -dx;
    audio.load();
    audio.play();
}
/*if (y+radius >innerHeight-50){
    x=0;
    y=0;
    c.font= "30px Arial";
    c.fillText("you lose",100,100);
    p++
}*/
if (y+radius > innerHeight-20 || y-radius < 0){
    audio.load();
    audio.play();
    dy = -dy;
    p--;
    document.getElementById('points').innerHTML =p;
}
y+=dy;
x+= dx;
}
animate();