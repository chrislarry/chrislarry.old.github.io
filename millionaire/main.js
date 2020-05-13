const title=document.getElementById('title');
const question=document.getElementById('question');
const answers=document.getElementById('answers');
let i=Math.floor((Math.random() * 5) + 1);
let theanswer, a, points, p, ctl, qno=1, foreuro, time=60,timers,
theanswera, theanswerb, theanswerc, theanswerd;
//quest={    "q":"",    "a":"asd",    "b":"asd",    "c":"asd",    "d":"asd",    "ca":"asd",    "ma":""};
let introsnd = new Audio('snd/intro.mp3');
let questionsnd = new Audio('snd/Question.mp3');
let countsnd = new Audio('snd/count.mp3');
let chearsnd = new Audio('snd/chearing.mp3');
let boosnd = new Audio('snd/boo.mp3');
let endsnd = new Audio('snd/end.mp3');
let defaultcolor='#191f46';
let lifes = 2 , highscore=0;

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
title.innerHTML=`<center><br>
    Ποιος θέλει να γίνει εκατομμυριούχος<br>
    <img src="Millionaire.png" width="180px"></center><br>
    <p>Καλώς ήρθες στο ποιος θέλει να γίνει εκατομμυριούχος.<br>
    Έχεις 60 δευτερόλεπτα να βρεις την απάντηση.<br>
    Το παιχνίδι ξεκινάει σύντομα.</p>
`;
setTimeout(Startgame,2000)
}

function timer(){
    
    if (time >=30){
        document.getElementById('timer').innerHTML=`<h3 style="color:green;">${time}</h3>`;
    } else if (time<30 && time >10){
        document.getElementById('timer').innerHTML=`<h3 style="color:yellow">${time}</h3>`;
    } else if (time <= 0){ 
        checkanswer();
    } else {
        document.getElementById('timer').innerHTML=`<h3 style="color:red">${time}</h3>`;
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

function Startgame(){
    introsnd.pause();
    setdefaults();
    questionsnd.load();
    questionsnd.play();
 setTimeout(countsong,2000);
    timers = setInterval(timer ,1000);
    i=Math.floor((Math.random() * 8) + 1);
 //   getpoint();
    fetch("questions.json")
                .then(response => response.json())
                .then(data => {
             this.data=data[i];       
             console.log(this.data);
    console.log(data);

    title.innerHTML='';
    question.innerHTML=`
   <center> <h2>Έχεις ${points} € και ${lifes} ζωές. Ερώτηση ${qno}</h2><img src="Millionaire.png" width="80px"><br>
    <div id="timer" style="fontsize:40px; margin-top:10px">60</div>
    </center>
       <div  class="question">${this.data.question}</div> `;

    answers.innerHTML=`<div class="row"><div class="col">
        <button onclick="checkanswer('a')">Α. ${this.data.a}</button>
        <button onclick="checkanswer('c')">Γ. ${this.data.c}</button>
            </div><div class="col">
        <button onclick="checkanswer('b')">Β. ${this.data.b}</button>
        <button onclick="checkanswer('d')">Δ. ${this.data.d}</button>
            </div></div>
            `;
});

}

function setdefaults(){
    theanswera=defaultcolor;
    theanswerb=defaultcolor; 
    theanswerc=defaultcolor;
    theanswerd=defaultcolor;
}

function checkanswer(clr){
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
        question.innerHTML=`
   <center><h2>Έχεις ${points}€. Ερώτηση νούμερο ${qno} για ${foreuro}€</h2>
     <img src="Millionaire.png" width="140px"><br><br><br></center>
     <div  class="question">${this.data.question}</div>    `;
        setTimeout(Startgame,5000);

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
    question.innerHTML=`
   <center><h2> Η σωστή απάντηση είναι το ${this.data.correctanswer}. Έφτασες τα ${points}€</h2>
    <img src="Millionaire.png" width="100px"><br><br></center>
    
     <div  class="question">${this.data.question}</div> `;
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
            setTimeout(Startgame ,5000);
        } else if (lifes <=0 && this.data.correctanswer != clr){
            
            question.innerHTML='';
            answers.innerHTML='';
            title.innerHTML=`
            Έφτασες τα ${points} ευρώ<br> με ${qno} σωστές απαντήσεις 
            `;
            highscoref();

            setTimeout(endsong,1500);
            setTimeout(endgame,5000);     

            
}
}

function highscoref(){
   highscore = localStorage.getItem('highscore');
   if (qno>highscore){
       question.innerHTML='<h2>you have a new high score ' +qno+'<br> Your old highscore was'+highscore+'</h2>';
       localStorage.setItem('highscore',qno);

    } else {
        question.innerHTML=`<h2>your score is ${qno} <br>your high score is ${highscore}</h2>`;

   }
}

function endgame(){
    highscoref();
    title.innerHTML=`<h1>Millionaire</h1>
    <img src="Millionaire.png" width="140px"><br><br>
    <p>Copyright by Chris Larry<br><br>
    https://chrislarry.github.io<br><br>
    chris_larry@riseup.net<br><br>
    <button onclick="location.reload();">Νέο παιχνίδι</button>

    `;
 //   question.innerHTML='';
    answers.innerHTML='';
}