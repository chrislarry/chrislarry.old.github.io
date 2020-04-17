    
var canvas = document.getElementById('canvas');
var c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//box
//c.fillRect(100,100,100,100);

//line
let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = (Math.random() -0.5) * 5;
let dy = (Math.random() -0.5) * 5;
 function animate(){
    requestAnimationFrame(animate);
    c.beginPath();
    c.moveTo(10+x,10+y);
    c.lineTo(10+x,190+y);
    c.lineTo(60+x,190+y);
    c.lineTo(60+x,90+y);
    c.lineTo(120+x,190+y);
    c.lineTo(170+x,190+y);
    c.lineTo(170+x,10+y);
    c.lineTo(120+x,10+y);
    c.lineTo(120+x,110+y);
    c.lineTo(60+x,10+y);
    c.lineTo(10+x,10+y);



c.fillStyle='#dc3545';
c.fill('evenodd')
c.strokeStyle = 'black';
c.stroke();
x+= dx;
y+= dy;
if (x > (innerWidth -180) || x<0){
    dx = -dx;
}
if (y > (innerHeight -200) || y<0){
    dy = -dy;
}

}
animate();
