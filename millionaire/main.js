const title=document.getElementById('title');
const question=document.getElementById('question');
const answers=document.getElementById('answers');
let i=Math.floor((Math.random() * 5) + 1);
let theanswer, a, points, p, ctl, qno=1, foreuro, time=60,timers,
theanswera, theanswerb, theanswerc, theanswerd;
//quest={    "q":"",    "a":"asd",    "b":"asd",    "c":"asd",    "d":"asd",    "ca":"asd",    "ma":""};


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
    points=0;
title.innerHTML=`<center><br>
    Ποιος θέλει να γίνει εκατομμυριούχος<br>
    <img src="Millionaire.png" width="180px"></center><br>
    <p>Καλός ήρθες στο ποιος θέλει να γίνει εκατομμυριούχος.<br>
    Έχεις 60 δευτερόλεπτα να βρεις την απάντηση.<br>
    Το παιχνίδι ξεκινάει σύντομα.</p>
`;
setTimeout(Startgame,5000)
}

function timer(){
    time--;
    if (time >=30){
        document.getElementById('timer').innerHTML=`<div><h3 style="color:green;">${time}</h1><div>`;
    } else if (time<30 && time >10){
        document.getElementById('timer').innerHTML=`<div><h3 style="color:yellow">${time}</h1><div>`;
    } else {
        document.getElementById('timer').innerHTML=`<div><h3 style="color:red">${time}</h1><div>`;
    }
    if (time <= 0){ checkanswer(); }
}

function getpoint(){
    document.getElementById('points').innerHTML='Points: '+points;
}

function Startgame(){
    timers = setInterval(timer ,1000);
    i=Math.floor((Math.random() * 5) + 1);
    getpoint();
    fetch("questions.json")
                .then(response => response.json())
                .then(data => {
             this.data=data[i];       
             console.log(this.data);
    console.log(points);

    title.innerHTML='';
    question.innerHTML=`
   <center> <h2>Έχεις ${points} €</h2><img src="Millionaire.png" width="80px"><br>
    <div id="timer" style="fontsize:40px; margin-top:10px"></div>
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

function checkanswer(clr){
    clearInterval(timers);
    time=60;
    if ( clr == this.data.correctanswer){
        qno++;
        points=points+100*qno.toFixed(0);
        foreuro=points+100*qno.toFixed(0)
        if (clr == 'a'){ theanswera = 'green'}
        if (clr == 'b'){ theanswerb = 'green'}
        if (clr == 'c'){ theanswerc = 'green'}
        if (clr == 'd'){ theanswerd = 'green'}
        question.innerHTML=`
   <center><h2>Έχεις ${points}€. Ερώτηση νούμερο ${qno} για ${foreuro}€</h2>
     <img src="Millionaire.png" width="140px"><br><br></center>
     <div  class="question">${this.data.question}</div> 
   
        `;
        setTimeout(Startgame,5000);
    } else {
        if (clr == 'a'){ theanswera = 'red'}else{ theanswera='#242424'}
        if (clr == 'b'){ theanswerb = 'red'}else{ theanswera='#242424'}
        if (clr == 'c'){ theanswerc = 'red'}else{ theanswera='#242424'}
        if (clr == 'd'){ theanswerd = 'red'}else{ theanswera='#242424'}
        if (this.data.correctanswer == 'a'){ theanswera = 'green'}else{ theanswera='#242424'}
        if (this.data.correctanswer == 'b'){ theanswerb = 'green'}else{ theanswera='#242424'}
        if (this.data.correctanswer == 'c'){ theanswerc = 'green'}else{ theanswera='#242424'}
        if (this.data.correctanswer == 'd'){ theanswerd = 'green'}else{ theanswera='#242424'}
    question.innerHTML=`
   <center><h2> Η σωστή απάντηση είναι το ${this.data.correctanswer}. Έφτασες τα ${points}€</h2>
    <img src="Millionaire.png" width="100px"><br><br></center>
    <button onclick="intro()">Νέο παιχνίδι</button>
     <div  class="question">${this.data.question}</div> `;
        this.data.correctanswer = '';
        points=0;
    }

    answers.innerHTML=`<div class="row"><div class="col">
        <button style="background:${theanswera}">Α. ${this.data.a}</button>
        <button  style="background:${theanswerc}">Γ. ${this.data.c}</button>
            </div><div class="col">
        <button style="background:${theanswerb}">Β. ${this.data.b}</button>
        <button  style="background:${theanswerd}">Δ. ${this.data.d}</button>
            </div></div>`;
        console.log(this.data.correctanswer);
}

function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}