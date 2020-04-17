

let api, page, q, ver;
const version = "news.0.26.apk";
const versionNo = "News-0.26";

    
        update();
        footerscroll();
        marketcap();
        weather();
        var id = getQueryVariable("id");
        if (id !=''){
            shownews();

        }else if (getQueryVariable("page") == "info"){
            info();
        }else if (getQueryVariable("page") == "youtube"){
            youtube();    
        }else{
            show();
        }

//https://api.darksky.net/forecast/58d7bfe187dc94623545ee34a5c619a7/40.756,22.775,7?exclude=currently&lang=el&units=auto

function corona(){
    document.getElementById('news').innerHTML='<center><h2>Ενημέρωση για τον Covid-19</h2></center><canvas id="countries"></canvas>'
fetch("https://corona.lmao.ninja/v2/countries")
.then(function (response) {
                return response.json();
            })
            .then(data => {
          

var ctx = document.getElementById('countries').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [data[201].country, data[200].country, data[99].country, data[181].country, data[69].country, data[75].country, data[187].country, data[197].country, data[78].country, data[42].country, data[158].country, data[101].country  ],        datasets: [{
            label: 'Θανατοι απο τον κορονοϊό.',
            data: [data[201].deaths, data[200].deaths, data[99].deaths, data[181].deaths, data[69].deaths, data[75].deaths, data[187].deaths, data[197].deaths, data[78].deaths, data[42].deaths, data[158].deaths, data[101].deaths ],
            backgroundColor: [    "blue", "red", "green", "orange", "blue", "black", "yellow", "red","blue", "red"     ],
            borderColor: [   "blue", "red", "green", "orange", "blue", "black", "yellow", "red","blue", "red"     ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
})
fetch("https://corona.lmao.ninja/v2/countries")
.then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

function appendData(data) {
            var mainContainer = document.getElementById("show");
            for (var i = 0; i < data.length; i++) {
             var div = document.createElement("div");
             div.innerHTML = `<div style="margin-left:10px;"><h2>${data[i].country}</h2><p>Συνολικές υποθέσεις: ${data[i].cases}<br> 
                καινούριες: ${data[i].todayCases}<br>
                Συνολικά πέθαναν: ${data[i].deaths} <br>
                σήμερα είχαμε: ${data[i].todayDeaths}<br>
                Αναρρώσαν: ${data[i].recovered} <br>
                Σε ΜΕΘ: ${data[i].critical}<br>
                 Στα νοσοκομεία νοσηλεύονται: ${data[i].active}<br>
                 Ενώ οι υποθέσεις ανά εκατομμύριο πολιτών είναι: ${data[i].casesPerOneMillion}</p></div>`;
   
                mainContainer.appendChild(div);
 
            }
        }
        fetch("https://corona.lmao.ninja/v2/all")
.then(response => response.json())
.then(data => {
  document.getElementById('death').innerHTML=`<div style="margin-left:10px;">
    <h2>Αναλυτικά για σήμερα.</h2>
  <br>Kρούσματα: ${data.cases}
  <br>Νέα Kρούσματα: ${data.todayCases}
  <br>Nεκροί: ${data.deaths}
  <br>Nεκροί σήμερα: ${data.todayDeaths}
  <br>Ανάρρωσαν: ${data.recovered}
  <br>Ενεργά Kρούσματα: ${data.active}
  <br>Σε Μ.Ε.Θ.: ${data.critical}
  <br>Κρούσματα ανά εκατομμύριο: ${data.deathsPerOneMillion}
  <br>Τεστ για ιό: ${data.tests}
  <br>Τεστ για ιό ανά εκατομμύριο: ${data.testsPerOneMillion}
  <br>Χώρες με κρούσματα : ${data.affectedCountries}<br><Br><h2  style="text-decoration: underline;">Αναλυτικά για την κάθε χώρα.</h2></div>
  
  `;




});



}

function info(){


    infoshow();
   

    document.getElementById('data').innerHTML=`
    <div class=about>
        
    <h1 id="title">News by Chris Larry</h1><br><br>
    <img src="img/news.png" height="80px"><br><br>
    
    <p>
    
    Version ${versionNo}<br>
    Latest release <span id="version"></span><br><Br>
    <span id="desc"></span>
        <br>
        <a href="https://chrislarry.github.io">https://chrislarry.github.io</a><br>
    </p>        <div class="about center">
    <br><Br><h2>Βοήθεια</h2>
  <center>  <table border=1><tr><td>
        <span class="info"><i class="fas fa-info"></i></span></td><td>Αυτές οι πληροφορίες.<br></td></tr><tr><td>
        <span class="info"><i class="far fa-newspaper"></i></span></td><td>Οι ειδήσεις του News.<br></td></tr><tr><td>
        <span class="info"><i class="fab fa-youtube"></span></td><td>Ειδήσεις σε βίντεο.<br></td></tr><tr><td>
        <span class="info">XX°C</span></td><td>Η θερμοκρασία, μπορείς να αλλάξεις πόλη από τις ρυθμίσεις.<br></td></tr><tr><td>
        <span class="info"><i class="fas fa-virus"></i></span></td><td>Ενημέρωση για τον Covid-19.<br></td></tr><tr><td>
        <span class="info"><i class="fas fa-cog"></i></span></td><td>Ρυθμίσεις<br></td></tr><tr><td>
        <span class="info"><i class="fas fa-cloud-download-alt"></i></span></td><td> Υπάρχει καινούριο update, πάτησε για να κατέβει.</td></tr>
        </table></center>
</div>
</div>
    `;

   
}

function pageshow(){
q =  getQueryVariable("q");  
page = getQueryVariable("page");
    if (page == "tech"){
api = "https://newsapi.org/v2/top-headlines?country=gr&category=technology&apiKey=425c786889fc4a2a953e1ed73f2066d9";
    } else if (page == "science") {
api = "https://newsapi.org/v2/top-headlines?country=gr&category=science&apiKey=425c786889fc4a2a953e1ed73f2066d9";
} else if (page == "sports") {
api = "https://newsapi.org/v2/top-headlines?country=gr&category=sports&apiKey=425c786889fc4a2a953e1ed73f2066d9";
} else if (page == "health") {
api = "https://newsapi.org/v2/top-headlines?country=gr&category=health&apiKey=425c786889fc4a2a953e1ed73f2066d9";
} else if (page == "business") {
api = "https://newsapi.org/v2/top-headlines?country=gr&category=business&apiKey=425c786889fc4a2a953e1ed73f2066d9";
} else if (page == "news") {
api = "https://chrislarry.github.io/news/news.json";
} else if (page == "temp") {
temp();
} else if (page == "youtube") {
youtube();
} else if (page == "settings") {
settings();
} else if (page == "corona") {
corona();
} else if (q != '') {
    const d = new Date()
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
            const fromday = ye+'-'+mo-1+'-'+da ;
api = 'https://newsapi.org/v2/everything?'+'q='+q+'&'+'from='+fromday+'&'+'sortBy=popularity&'+'apiKey=425c786889fc4a2a953e1ed73f2066d9';
} else {
api = "https://newsapi.org/v2/top-headlines?country=gr&apiKey=425c786889fc4a2a953e1ed73f2066d9";
    }   
}


//  const api = "https://chrislarry.github.io/news/news.json";

function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
function settings(){
city = localStorage.getItem('City');
    document.getElementById('data').innerHTML=`
   <br><Br>
    <div class=about><h2>Ρυθμίσεις</h2><br><br>
    <p>Γράψε το όνομα της πόλης σου <br>παράδειγμα Athens</p>
    <form class="set" action="?page=settings" style="margin: 0 auto;"" >
    <input class="set" type="text" placeholder="City..." id="weather" style="width:120px;margin: 0 auto;">
    <input  class="set" type="submit" onclick="setcity()"  style="width:120px; margin: 0 auto; " value="Save"> 
    Η πόλη ρυθμίστηκε σε <strong>${city}</strong>
    </form>

    </div>
    `;
}
function setcity(){
let city= document.getElementById('weather').value;
localStorage.setItem("City", city);
}

function youtube(){

       document.getElementById('ytmenu').innerHTML=`
              <div class="ytmenu" style="margin: -20px 0px 20px 0px ; height:20px;"> <a href="?page=youtube">ERT</a>
        &nbsp; <a href="?page=youtube&cat=SKAI">SKAI</a> 
        &nbsp; <a href="?page=youtube&cat=CNN">CNN</a> 
        &nbsp; <a href="?page=youtube&cat=BBC">BBC</a>
        &nbsp; <a href="?page=youtube&cat=global">Global News</a>
        &nbsp; <a href="?page=youtube&cat=Larry">Chris Larry's</a>
       <br></div>`;
        video = getQueryVariable('video');
        cat = getQueryVariable('cat');

        document.getElementById('playvideo').innerHTML=`<div class="youtubevideo">
        <iframe width="100%" style="max-width:500px;" height="200" src="https://www.youtube.com/embed/${video}"
         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture" allowfullscreen></iframe></div>
        `;
 
    //https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UC2u0Ly2T56OmzcIH_UBmqoA&key=AIzaSyD2vSbi5PoJQ8-RPaMcenwN4Kj_d_IfOes
    //playlist = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyD2vSbi5PoJQ8-RPaMcenwN4Kj_d_IfOes&maxResults=10&playlistId=PL0P8mi2fQacaW4M0QxzFsyPLHDVo0B88Q';
//playlist = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyD2vSbi5PoJQ8-RPaMcenwN4Kj_d_IfOes&maxResults=50&playlistId=PLgeq7ezNgWe_CtArzWbso34HHLOgsMzJZ';
//https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v='+youtubeid[i].id+'&format=json 
//playlist1='https://www.googleapis.com/youtube/v3/search?key=AIzaSyD2vSbi5PoJQ8-RPaMcenwN4Kj_d_IfOes&channelId=PLgeq7ezNgWe97Qkdz2BdB51lMIIIqTUfp&part=snippet,id&order=date&maxResults=20';
   // youtubeapi= 'AIzaSyD2vSbi5PoJQ8-RPaMcenwN4Kj_d_IfOes';
let first ='https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyD2vSbi5PoJQ8-RPaMcenwN4Kj_d_IfOes&maxResults=';
let results = 50;
let second = '&playlistId=';

if (cat == 'CNN'){
    playlistID = 'PL6XRrncXkMaVGQM7ra02ystnTt_PExEgr';
} else if (cat=='BBC'){
    playlistID = 'PLS3XGZxi7cBVTzEE4Sim9UuNKnUJq9Vkh';
} else if (cat=='SKAI'){
    playlistID = 'PL0P8mi2fQacaW4M0QxzFsyPLHDVo0B88Q';
} else if (cat=='Larry'){
    playlistID = 'PLkqOCRl4i0nRuRzz34jpj-DXTT4uIp9dz';
} else if (cat=='global'){
    playlistID = 'PLA0c-X5PdUCXWWJb8XFqdbpelQQFdBTk-';
       
} else {
    playlistID = 'PLgeq7ezNgWe_CtArzWbso34HHLOgsMzJZ';
}

playlist= first+results+second+playlistID;
fetch(playlist)
    .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    youtubeData(data);
                })
                .catch(function (err) {
                    console.log('error: ' + err);
                });
    
    function youtubeData(data) {
        console.log(data);
        cat = getQueryVariable('cat');
                var mainContainer = document.getElementById("videolist");
                for (var i = 0; i < data.items.length; i++) {
                 var div = document.createElement("div");
     div.innerHTML = `<div class="row"><div class="col-5">
<a href="?page=youtube&cat=${cat}&video=${data.items[i].snippet.resourceId.videoId}"><img src="${data.items[i].snippet.thumbnails.high.url}" height="100"></a></div>
<div class="col-6" style="margin-top:10px">
<a href="?page=youtube&cat=${cat}&video=${data.items[i].snippet.resourceId.videoId}">
<h1>${data.items[i].snippet.title}</h1></a>
</div></div>
 `;
 mainContainer.appendChild(div);
  }
               
                }}            


function temp(){
    let city= localStorage.getItem("City");
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=e1562f4036a2a6aa137df6b15c4608a7")
                .then(response => response.json())
                .then(data => {
                  
                    let wimg , weathertype;
                    if (data.weather[0].main=="Rain"){
                        wimg = '<img src="img/weather/Status-weather-showers-scattered-icon.png">'
                        weathertype='Βροχή';
                    } else if (data.weather[0].main=="Few clouds"){
                        wimg = ' <img src="img/weather/Status-weather-clouds-icon.html">'
                        weathertype='Λίγα σύννεφα';
                    } else if (data.weather[0].main=="Scattered clouds"){
                        wimg = ' <img src="img/weather/Status-weather-clouds-icon.png">'
                        weathertype='Καταιγίδα';
                    } else if (data.weather[0].main=="Broken clouds"){
                        wimg = ' <img src="img/weather/Status-weather-many-clouds-icon.png">'
                        weathertype='Συννεφιά';
                    } else if (data.weather[0].main=="Clouds"){
                        wimg = ' <img src="img/weather/Status-weather-clouds-icon.png">'
                        weathertype='Συννεφιά';
                    } else if (data.weather[0].main=="Thunderstorm"){
                        wimg = ' <img src="img/weather/Status-weather-storm-night-icon.png">'
                        weathertype='Καταιγίδα';
                    } else if (data.weather[0].main=="Snow"){
                        wimg = ' <img src="img/weather/Status-weather-hail-icon.png">'
                        weathertype='Χιόνι';
                    } else if (data.weather[0].main=="Clear"){
                        wimg = '<img src="img/weather/Status-weather-clear-icon.png">'
                        weathertype='Καθαρός ουρανός';
                    }  else if (data.weather[0].main=="Mist"){
                        wimg = '<img src="img/weather/Status-weather-many-clouds-icon.png">'
                        weathertype='Ομίχλη';
                    
                    }
             document.getElementById('data').innerHTML=`
            <br><Br>
            <div class="about"> <h1>${data.name}</h1>
             <strong>${wimg}</strong>
                <h2>${weathertype}</h2><br>
                <p>
                Θερμοκρασία ${data.main.temp}°C <br>
                Αισθηση θερμοκρασιας ${data.main.feels_like}°C <br>
                Μικρότερη θερμοκρασια ημέρας ${data.main.temp_min}°C <br>
                Μεγαλύτερη θερμοκρασιας ημέρας ${data.main.temp_max}°C <br>
                Ατμοσφαιρική πίεση ${data.main.pressure}p<br>
                Υγρασία ${data.main.humidity}%<br>
                Ορατότητα ${data.visibility}μ<br>
                Ταχύτητα ανέμων ${data.wind.speed}Χμ<br>
                

                </p></div>
             
             `;
             
                });
}

function infoshow(){            
                fetch("https://chrislarry.github.io/index.json")
                .then(response => response.json())
                .then(data => {
                    
                    document.getElementById("title").innerHTML= data.articles[1].title;
                    document.getElementById("desc").innerHTML= data.articles[1].description;
                    document.getElementById("version").innerHTML= data.articles[1].version;
                });
                }

function update(){            
                fetch("https://chrislarry.github.io/index.json")
                .then(response => response.json())
                .then(data => {
                if (data.articles[1].download!= version) {

                    document.getElementById('update').innerHTML=`<a href="${data.articles[1].download}"><i class="fas fa-cloud-download-alt"></i></a>`;
                }
 });
}
function weather(){       
    let city= localStorage.getItem("City");     
                fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=e1562f4036a2a6aa137df6b15c4608a7")
                .then(response => response.json())
                .then(data => {
 let wimg;
                    if (data.weather[0].main=="Rain"){
                        wimg = ' <i class="fas fa-cloud-showers-heavy"></i>'
                    } else if (data.weather[0].main=="Thunderstorm"){
                        wimg = ' <i class="fas fa-poo-storm"></i>'
                    } else if (data.weather[0].main=="Snow"){
                        wimg = ' <i class="fas fa-snowflake"></i>'
                    } else if (data.weather[0].main=="Clear"){
                        wimg = ' <i class="fas fa-sun"></i>'
                    } else if (data.weather[0].main=="Clouds"){
                        wimg = ' <i class="fas fa-cloud"></i>'
                    }  else if (data.weather[0].main=="Mist"){
                        wimg = ' <i class="fas fa-smog"></i>'
                    }

document.getElementById('darksky').innerHTML=
'<a href="?page=temp">'+ data.main.temp.toFixed(0)+'°C</a>';
//console.log(data.weather[0].main) ;             
 });
}
    
    function shownews(){
    pageshow();    
        fetch(api)
        .then(response => response.json())
        .then(data => {

            var i = getQueryVariable("id");
            
            if(data.articles[i].urlToImage == null){
                     img="./img/noimage.jpg";
                 }else{
                     img=data.articles[i].urlToImage;
                 }
        document.getElementById('show').innerHTML= `
      
      <img src="${img}" width="100%"><br>
      <h1> ${data.articles[i].title} </h1>
      <p> 
      ${data.articles[i].description}<br>
      <em>Εκδόθηκε ${data.articles[i].publishedAt} από ${data.articles[i].source.name}</em><br>
      <br><center><a href="${data.articles[i].url}" class="btn btn-outline-danger btn-sm" role="button" aria-pressed="true">Περισσότερα</a></center> 
      </p>
      `;
    });
    }
    
    function show(){
    pageshow();
    fetch(api)
    .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    appendData(data);
                })
                .catch(function (err) {
                    console.log('error: ' + err);
                });
    
    function appendData(data) {
        
                var mainContainer = document.getElementById("news");
                for (var i = 0; i < data.articles.length; i++) {
                    if(data.articles[i].urlToImage == null){
                 img="./img/noimage.jpg";
                     }else{
                 img=data.articles[i].urlToImage;
             }
                 var div = document.createElement("div");
 var pageset, qset, q, page;
 q =  getQueryVariable("q");  
page = getQueryVariable("page");
pageset = "&page="+page;
qset = "&q="+q;
 if (q == '' && page==''){
    div.innerHTML = `
                <div class="row">    
        <div class="col-4"><a href="?id=${i}">
        <img src="${img}" width="100%"></a>  </div>
        <div class="col-8"><a href="?id=${i}">
        <h1>${data.articles[i].title}</h1></a> </div>
                </div>  `;


 } else{
                div.innerHTML = `
                <div class="row">    
        <div class="col-4"><a href="?id=${i}${pageset}${qset}">
        <img src="${img}" width="100%"></a>  </div>
        <div class="col-8"><a href="?id=${i}${pageset}${qset}">
        <h1>${data.articles[i].title}</h1></a> </div>
                </div>  `;
                
 }
                    mainContainer.appendChild(div);
                }}
}

function footerscroll(){
//https://api.openrates.io/latest
//https://www.floatrates.com/daily/eur.json
    fetch('https://api.openrates.io/latest')
        .then(response => response.json())
        .then(data => {


            document.getElementById('scroll').innerHTML=`
             USD:${data.rates.USD.toFixed(2)}€
             GBP:${data.rates.GBP.toFixed(2)}€
             JPY:${data.rates.JPY.toFixed(2)}€
                    `;
        });
}       
    
function marketcap(){
  //API KEY 9ef00d33-e37a-4a19-83ff-a546c57e0d14
    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=9ef00d33-e37a-4a19-83ff-a546c57e0d14')
    .then(response => response.json())
    .then(data=> { 
        const d = new Date();
        const ww = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(d);    
        const yy = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        const mm = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
        const dd = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        const day = ww+' '+dd+' '+mm+' '+yy ;

        document.getElementById('crypto').innerHTML = `
        BTC:${data.data[0].quote.USD.price.toFixed(0)}$
        ETH:${data.data[1].quote.USD.price.toFixed(0)}$
        ETC:${data.data[20].quote.USD.price.toFixed(2)}$
        XMR:${data.data[11].quote.USD.price.toFixed(2)}$

        `;
    });
}