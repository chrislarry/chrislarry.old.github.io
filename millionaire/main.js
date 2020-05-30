const title=document.getElementById('title');
const question=document.getElementById('question');
const answers=document.getElementById('answers');
const timec=document.getElementById('timec');
const stats=document.getElementById('stats');
let i, lasti;
let theanswer, a, points, p, ctl, qno=0, foreuro, time=60,timers,
theanswera, theanswerb, theanswerc, theanswerd;
//quest={    "q":"",    "a":"asd",    "b":"asd",    "c":"asd",    "d":"asd",    "ca":"asd",    "ma":""};
let introsnd = new Audio('snd/intro.mp3');
let questionsnd = new Audio('snd/Question.mp3');
let countsnd = new Audio('snd/count.mp3');
let chearsnd = new Audio('snd/chearing.mp3');
let boosnd = new Audio('snd/boo.mp3');
let endsnd = new Audio('snd/end.mp3');
let defaultcolor='#191f46';
let lifes = 2 , highscore=0, tolevel;




function onload(){
    //getpoint();

        intro();
        if ( this.data.correctanswer != ''){
            checkanswer();

        } else{
            Startgame();
 
        }
        

}

function intro(){
    introsnd.load();
    introsnd.play();
    points=0;
title.innerHTML=`<center>
IQ quiz<br><br>
    <img src="iq.png" width="180px"></center><br>
    <p>Καλώς ήρθες στο IQ quiz<br><br>
    60 δευτερόλεπτα<br><br>
    3 ζωές<br><br>
    Μάζεψε όσους πόντους μπορείς <br><br>
    Ξεπέρασε το ρεκόρ σου<br><br>
    Το παιχνίδι ξεκινάει σύντομα</p>`;
    banner();
setTimeout(Startgame,5000);
}

function timer(){
    
    if (time >=30){
        timec.innerHTML=`<h3 style="color:green;">${time}</h3>`;
    } else if (time<30 && time >10){
        timec.innerHTML=`<h3 style="color:yellow">${time}</h3>`;
    } else if (time <= 0){ 
        checkanswer();
    } else {
        timec.innerHTML=`<h3 style="color:red">${time}</h3>`;
    }
    
    time--;
}

//function getpoint(){
//    document.getElementById('points').innerHTML=`Έχεις ${points} €`;
//}
function countsong(){
    countsnd.load();
    countsnd.play();
}
function endsong(){
    endsnd.load();
    endsnd.play();
}

function Startgame(i){
    introsnd.pause();
    setdefaults();
    questionsnd.load();
    questionsnd.play();
 setTimeout(countsong,2000);
    banner();
 

  //  getpoint();
    fetch("questions.json")
                .then(response => response.json())
                .then(data => {
                    i=Math.floor((Math.random() * data.length) + 1);
                    if(i==lasti){
                        i=Math.floor((Math.random() * data.length) + 1);
                    }
                    lasti=i;

                    console.log(lasti);
             this.data=data[i];  
             this.data.length=data.length;     
             console.log(this.data);
  //  console.log(data);
    

    title.innerHTML='';
  statics();
  question.innerHTML=` <div  class="question">${this.data.question}</div> `;

    answers.innerHTML=`<div class="row"><div class="col">
        <button onclick="checkanswer('a')">Α. ${this.data.a}</button>
        <button onclick="checkanswer('c')">Γ. ${this.data.c}</button>
            </div><div class="col">
        <button onclick="checkanswer('b')">Β. ${this.data.b}</button>
        <button onclick="checkanswer('d')">Δ. ${this.data.d}</button>
            </div></div>
            `;
});
timers = setInterval(timer ,1000);
}

function levels(){
    levelp = localStorage.getItem('iqlevel');
    levelp = levelp+points;
    localStorage.setItem('iqlevel', level);

    
}


function statics(){
    stats.innerHTML=`
     <h2>πόντοι: ${qno} &nbsp;&nbsp;&nbsp;  ζωές: ${lifes}&nbsp;&nbsp;&nbsp; ερωτήσεις: ${this.data.length}</h2>
    <img src="iq.png" width="80px"><br><Br>`;
}

function setdefaults(){
    theanswera=defaultcolor;
    theanswerb=defaultcolor; 
    theanswerc=defaultcolor;
    theanswerd=defaultcolor;
}

function checkanswer(clr){
    statics();
    timec.innerHTML='';
    setdefaults();
    countsnd.pause();
    clearInterval(timers);
    time=60;
    if ( clr == this.data.correctanswer){
        
        chearsnd.load();
        chearsnd.play();
        qno++;
        points=points+100*qno.toFixed(0);
        foreuro=points+100*qno.toFixed(0)
        if (clr == 'a'){ theanswera = 'green'}
        else if (clr == 'b'){ theanswerb = 'green'}
        else if (clr == 'c'){ theanswerc = 'green'}
        else if (clr == 'd'){ theanswerd = 'green'}
        statics();
        question.innerHTML=`<div  class="question">${this.data.question}</div>`;
        //setTimeout(Startgame,5000);
        title.innerHTML='<button onclick="Startgame()">Επομένη ερώτηση</button>';
    } else {
    

        boosnd.load();
        boosnd.play()
        
        if (clr == 'a'){ theanswera = 'red'}
        else if (clr == 'b'){ theanswerb = 'red'}
        else if (clr == 'c'){ theanswerc = 'red'}
        else if (clr == 'd'){ theanswerd = 'red'}
        if (this.data.correctanswer == 'a'){ theanswera = 'green'}
        else if (this.data.correctanswer == 'b'){ theanswerb = 'green'}
        else if (this.data.correctanswer == 'c'){ theanswerc = 'green'}
        else if (this.data.correctanswer == 'd'){ theanswerd = 'green'}
    question.innerHTML=`<div  class="question">${this.data.question}</div> `;
        this.data.correctanswer = '';
        
    }
    answers.innerHTML=`<div class="row"><div class="col">
        <button style="background:${theanswera}">Α. ${this.data.a}</button>
        <button  style="background:${theanswerc}">Γ. ${this.data.c}</button>
            </div><div class="col">
        <button style="background:${theanswerb}">Β. ${this.data.b}</button>
        <button  style="background:${theanswerd}">Δ. ${this.data.d}</button>
            </div></div>`;
        console.log(this.data.correctanswer);
        if (lifes >0 && this.data.correctanswer != clr) {
            lifes--;
            //setTimeout(Startgame ,5000);
            title.innerHTML='<button onclick="Startgame()">Επομένη ερώτηση</button>';
        } else if (lifes <=0 && this.data.correctanswer != clr){
            
            question.innerHTML='';
            answers.innerHTML='';
            title.innerHTML=`
            
            `;
            highscoref();
            setTimeout(lifesrem,5000)
            setTimeout(endsong,1500);
            setTimeout(endgame,5000);     

            
}
}

function lifesrem(){
    if (lifes >0 && this.data.correctanswer != clr) {
        lifes--;
        //setTimeout(Startgame ,5000);
        title.innerHTML='<button onclick="Startgame()" width="100%">Επομένη ερώτηση</button>';
    } else if (lifes <=0 && this.data.correctanswer != clr){
        
        question.innerHTML='';
        answers.innerHTML='';
        title.innerHTML=`
        <img src="iq.png" width="140px"><br><br>
        `;
        highscoref();
}
}

function highscoref(){
   highscore = localStorage.getItem('highscore');
   if (qno>highscore){
       question.innerHTML='<h4>Έσπασες το παλιό σου ρεκόρ, το καινούριο είναι ' +qno+' πόντοι.<br><br> Το παλιό σου ρεκόρ ήταν  '+highscore+' πόντοι.</h4>';
       localStorage.setItem('highscore',qno);

    } else {
        question.innerHTML=`<h4>Απάντησες σωστά σε ${qno} ερωτήσεις.<br><br> Το ρεκόρ σου είναι ${highscore} ερωτήσεις.</h4><br>`;

   }
}

function endgame(){
    highscoref();
    stats.innerHTML=``;



    answers.innerHTML=`<h1>IQ quiz</h1>
    <img src="iq.png" width="140px"><br><br>
    <p>Copyright by Chris Larry<br><br>
    https://chrislarry.github.io<br><br>
    chris_larry@riseup.net<br><br>
    

    `;
    banner();

 //   question.innerHTML='';
    answers.innerHTML='<button onclick="location.reload();">Νέο παιχνίδι</button>';
}

function banner(){
    let banner = document.getElementById('banner'); 
    let ran = Math.random();
    let image, url;
    console.log(ran);
    if (ran > 0.2 && ran < 0.5){
        image= 'reception.jpg';
        url='https://irishotel.net/';
    } else if (ran > 0.5 && ran < 0.75){
            image= 'pylh.jpg';
            url='https://pylh.eu/';
    } else if (ran > 0.75){
        image= 'dream.jpg';
        url='http://www.dreamsites.gr/'; 
    }else{
        image= 'banner.png';
        url='https://chrislarry.github.io';
    }
    banner.innerHTML = `<img src="${image}" onclick="window.open('${url}')" class="banner">`;

}