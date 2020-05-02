const canvas = document.getElementById('topbanner');
var c = canvas.getContext("2d");

function banner(){
c.fillStyle = "black";
c.fillRect(0, 0, canvas.width, canvas.height);
bgimg = new Image();
bgimg.src = 'rick.jpg';
c.drawImage(bgimg, 0, 0);

}

function bgfront(){
    bgimgfront = new Image();
    bgimgfront.src = 'img/rickfront.png';
    c.drawImage(bgimgfront, 0, 0);

}



let x=40, y=0, radius=5, dx=1, dy=2, hop=0,
 comx=-21, comy=70, comdx=0.0067, comdy=0.0003,
 diasx=341, diasy=-10, diasdx=0.007, diasdy=0.003,
 comx2=900, comy2=0, comdx2=-0.01, comdy2=0.001,
 cronosx=800, cronosy=80, cronosdx=-0.005, cronosdy=0.001,
 homerx=-30, homery=80, homerdx=0.193, homerdy=-0.001,
 benderx=1060, bendery=90, benderdx=-0.293, benderdy=-0.001,
 satex=-360, satey=100, satedx=0.03, satedy=-0.01,
 texts='https://chrislarry.github.io                                   Movies, Games, Posts, News, Nasa, Links, Darknet Links, Books, Downloads '
 , opacity=0, add=0.01, titlex=900, titledx=-1, 
 title='Created by Chris Larry ®';


 
 function showtext(){
  
    c.fillStyle="#a93c3c";
    c.font= 'Bold 15px Arial';
    if (opacity>1){
        add = -0.01;
    } else if (opacity<0.5){
        add = 0.01;
    }

    opacity+=add;
    c.save();
    c.globalAlpha = opacity;

    c.fillText(texts,10,195);
    c.restore();
 //console.log(opacity);   
 c.fillStyle="white";
 c.font= '15px Arial';
    c.fillText(title,titlex,15);
    if (titlex >10){
    titlex+=titledx;
    }
console.log(titlex);
}
function time(){
  
    c.fillStyle="white";
    c.font= '15px Arial';
    if (opacity>1){
        add = -0.01;
    } else if (opacity<0){
        add = 0.01;
    }

    opacity+=add;
    c.save();
    c.globalAlpha = opacity;
    c.fillText(date(),10,195);
    c.restore();
 console.log(date());   


}
function comet(){
    cometimg = new Image();
    cometimg.src = 'img/comet.png';
    c.drawImage(cometimg, comx, comy);
    comx+=comdx;
    comy+=comdy;

}

function comet2(){
    cometimg2 = new Image();
    cometimg2.src = 'img/comet2.png';
    c.drawImage(cometimg2, comx2, comy2);
    comx2+=comdx2;
    comy2+=comdy2;

}

function homer(){

//homerx =130;
//homery = 70;

    homerimg = new Image();
    homerimg.src = 'img/homer.png';
    c.drawImage(homerimg, homerx, homery);
    homerx+=homerdx;
    homery+=homerdy;
    c.fillStyle='black';
    c.font= '12px Arial';

    if (homerx > 100 && homerx <170){
    homercloud = new Image();
    homercloud.src = 'img/textcloud.png';
    c.drawImage(homercloud, 100, 13);
    c.fillText("HELLO!!!", 110,35);
    c.fillText("Bender", 110,50);
    }
    if (homerx > 220 && homerx <290){
        homercloud = new Image();
        homercloud.src = 'img/textcloud.png';
        c.drawImage(homercloud, 220, 13);
        c.fillText("HELLO!!!", 230,35);
        c.fillText("Rick & Morty", 225,50);
        }
        if (homerx > 320 && homerx <390){
            homercloud = new Image();
            homercloud.src = 'img/textcloud.png';
            c.drawImage(homercloud, 320, 13);  
            c.fillText("Fuck you", 330,35);
            c.fillText("Homer", 330,50);
    }
        if (homerx > 360 && homerx <420){

            homercloud = new Image();
            homercloud.src = 'img/textcloud.png';
            c.drawImage(homercloud, 420, 0);
            c.fillText("Yea fuck", 435,25);
            c.fillText("you Bitch", 435,40);
        }
    if (homerx > 700 && homerx <770){
        homercloud = new Image();
        homercloud.src = 'img/textcloud.png';
        c.drawImage(homercloud, 700, 13);
        c.fillText("Good bye", 715,35);
        c.fillText("Guys!!!", 715,50);
        }

}

function bender(){

        benderimg = new Image();
        benderimg.src = 'img/bender.png';
        c.drawImage(benderimg, benderx, bendery);
        benderx+=benderdx;
        bendery+=benderdy;
    
    
        if (benderx > 700 && benderx <770){
        bendercloud = new Image();
        bendercloud.src = 'img/textcloud.png';
        c.drawImage(bendercloud, 700, 13);
        c.fillText("Fuck you", 710,35);
        c.fillText("Homer", 710,50);
        }
       if (benderx > 200 && benderx <270){
            bendercloud = new Image();
            bendercloud.src = 'img/textcloud.png';
            c.drawImage(bendercloud, 200, 13);
            c.fillText("I need", 210,35);
            c.fillText("a Beer", 210,50);
           }
}

function planets(){

    cronosimg = new Image();
    cronosimg.src = 'img/kronos.png';
    c.drawImage(cronosimg, cronosx, cronosy);
    cronosx+=cronosdx;
    cronosy+=cronosdy;

    diasimg = new Image();
    diasimg.src = 'img/dias.png';
    c.drawImage(diasimg, diasx, diasy);
    diasx+=diasdx;
    diasy+=diasdy;

}

function satellite(){
    sateimg = new Image();
    sateimg.src = 'img/satellite.png';
    c.drawImage(sateimg, satex, satey);
    satex+=satedx;
    satey+=satedy;

}

function ball(){
        c.beginPath();
        c.lineWidth=0;
        if (dy == 0 ){
            c.fillStyle='black';    
        } else {
            c.fillStyle='blue';
        }
   //     c.arc(x,y,radius,0,Math.PI *2,false);
    //    c.fill();
   //     c.closePath();
        y+=dy;
        x+= dx;   
        if (y+radius>200){
            dy = -dy;
            hop = hop +20;            

        }
        if (y+radius < hop){
            dy = -dy;
          
        }
        if (x+radius<0){
            dx= -dx;
        }
        if (x+radius>900){
            dx = -dx;
        }
        if (hop > 190){
            dy=0;
        }
}

function text(){
        c.fillStyle='white';
        c.font= '40px Arial';
      //  c.textMode(CENTER);
        let texty =185, textx=350;

        if (dy == 0 && x < 60){
            c.fillText('News', textx,texty)
        }
        if (dy == 0 && x > 60 && x < 200){
            c.fillText('Games', textx,texty)
        }
        if (dy == 0 && x > 200 && x < 400){
            c.fillText('My Posts', textx,texty)
        }
        if (dy == 0 && x > 200 && x < 400){
            c.fillText('My Posts', textx,texty)
        }
        if (dy == 0 && x > 400 && x < 600){
            c.fillText('My Links', textx,texty)
        }
        if (dy == 0 && x > 600 && x < 800){
            c.fillText('Movies', textx,texty)
        }
        if (dy == 0 && x > 800){
            c.fillText('Ήξερες ότι', textx,texty)
        }

}

function animate(){
    
    c.clearRect(0, 0, canvas.width, canvas.height);

    banner();
    comet();
    comet2();
    planets();
    satellite();
    homer();
    bender();
    bgfront();
    showtext();
  
    requestAnimationFrame(animate);
}
animate();
