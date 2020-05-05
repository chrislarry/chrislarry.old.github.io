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
 diasx=341, diasy=-10, diasdx=0.007, diasdy=0.001,
 comx2=900, comy2=0, comdx2=-0.019, comdy2=0.006,
 cronosx=800, cronosy=80, cronosdx=-0.005, cronosdy=0.001,
 likekronosx=600, likekronosy=80, likekronosdx=-0.01, likekronosdy=-0.001,
 moonx=140, moony=80, moondx=0.015, moondy=-0.001,
 earthx=80, earthy=80, earthdx=0.015, earthdy=-0.001,
 shipx=-990, shipy=15, shipdx=3.5, shipdy=0.19,
 homerx=-30, homery=80, homerdx=0.193, homerdy=-0.001, 
 benderx=1060, bendery=80, benderdx=-0.293, benderdy=-0.001,
 satex=-60, satey=0, satedx=0.05, satedy=0.009,
 texts='https://chrislarry.github.io                                   Movies, Games, Posts, News, Nasa, Links, Darknet Links, Books, Downloads '
 , opacity=0, add=0.01, titlex=1900, titledx=-4, 
 title='Created by Chris Larry ®',
 opacityw=0.0001 , addw=0.01, 
 titles= name+' check out \"tennis game\" and \"news app\"' , news , 
 welcome= 'Welcome Back '+name,
 g=900, dg=3, 
 hx=940, hxd=3, 
 cov=980, covd=3,
 nasad=1020, nasadx=3,
 newsd =1060, newsdx=3,
 tennisd=1100 , tennisdx=3,
 movietd=1140 ,movietdx=3;

function datacon(titles, news, welcome){
    fetch("index.json")
    .then(response => response.json())
    .then(data => {                  
titles = data.data[0].title;
news= data.data[0].news;
welcome= data.data[0].welcome;

//console.log(data.data[0].title , data.data[0].news, data.data[0].welcome);




    })
}
 
 function showtext(){
  
    c.fillStyle="white";
    c.font= 'Bold 15px Arial';
    if (opacity>1){
        add = -0.0031;
    } else if (opacity<0.7){
        add = 0.0031;
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
//console.log(titlex);
c.fillStyle="white"; 
c.font= '15px Arial';
c.save();
c.fillText('chris_larry@riseup.net',titlex+730,15);
c.restore();



if (homerx>0 && opacityw>0){
    c.save();
    opacityw=  opacityw+0.001;
    
    if (homerx >150){
        opacityw=opacityw-0.01;
    }
    
    c.globalAlpha = opacityw;

    c.font= '48px Arial';
    c.strokeStyle = "#FFFFFF";
    c.fillText(welcome, 10,175); 
   // c.strokeText('Welcome Back '+name, 10,170); 
    c.stroke();
    c.restore();
    console.log(welcome);
}

if (homerx>900){
    c.font= '20px Arial';
    c.fillText(titles, 10,175); 
}
c.font= '15px Arial';
if (homerx>300){
    g-=dg;
    if (g<760){
        g=760;
    }
    c.fillText('All behind 5g', g,40)
}
if (homerx>310){
    hx-=hxd;
    if (hx<760){
        hx=760;
    }
    c.fillText('Ήξερες ότι', hx,60)
}
if (homerx>320){
    cov-=covd;
    if (cov<760){
        cov=760;
    }
    c.fillText('Covid-19 News', cov,80)
}
if (homerx>330){
    nasad-=nasadx;
    if (nasad<760){
        nasad=760;
    }
    c.fillText('NASA News', nasad,100)
}
if (homerx>340){
    newsd-=newsdx;
    if (newsd<760){
        newsd=760;
    }
    c.fillText('News App', newsd,120)
}
if (homerx>350){
    tennisd-=tennisdx;
    if (tennisd<760){
        tennisd=760;
    }
    c.fillText('Tennis Game', tennisd,140)
}
if (homerx>360){
    movietd-=movietdx;
    if (movietd<760){
        movietd=760;
    }
    c.fillText('MovieTime app', movietd,160)
}
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
let ds=0,h=0,xd=0.1,dh=1.29;
function ship(){
    shipimg = new Image();
    shipimg.src = 'img/ship.png';
    if (homerx>740){
        c.save();
        
        if (ds <30){
        ds=ds+xd;
        h=h+dh;
        console.log(ds,h);
        }
        c.translate(20, h);
        c.rotate(-ds*Math.PI/180);
        c.drawImage(shipimg, shipx, shipy);
        c.restore();
    }else {
        c.drawImage(shipimg, shipx, shipy);
    }
    shipx+=shipdx;
    shipy+=shipdy;  
    if (shipx>270){
        shipdx=shipdx-0.016
        if (shipdx<0.4 ){shipdx=0.4;}
    }  
    if (shipx > 640){
        shipdx=0.30;
        shipdy=0.2;
    }
    if (shipy >142){
        shipdx =0;
        shipdy =0;
    }
    if (homerx >900){
        shipdy=-0.30;
        shipdx=2;
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

    moonimg = new Image();
    moonimg.src = 'img/moon.png';
    c.drawImage(moonimg, moonx, moony);
    moonx+=moondx;
    moony+=moondy;

    earthimg = new Image();
    earthimg.src = 'img/earth.png';
    c.drawImage(earthimg, earthx, earthy);
    earthx+=earthdx;
    earthy+=earthdy;

    likekronosimg = new Image();
    likekronosimg.src = 'img/likecronos.png';
    c.drawImage(likekronosimg, likekronosx, likekronosy);
    likekronosx+=likekronosdx;
    likekronosy+=likekronosdy;

    sateimg = new Image();
    sateimg.src = 'img/satellite.png';
    c.drawImage(sateimg, satex, satey);
    satex+=satedx;
    satey+=satedy;
}

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    banner();
    comet();
    comet2();
    planets();

    ship();
    homer();
    bender();
    bgfront();
    showtext();
    requestAnimationFrame(animate);
}
animate();
datacon();
