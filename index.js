function drake() {
alert("Συμπλήρωσε τα στοιχεία στους επόμενους πινάκες.");     
var R = prompt("ο μέσος ρυθμός του σχηματισμού νέων αστέρων στον Γαλαξία,");
var fp = prompt("το ποσοστό των σχηματισμένων αστέρων οι οποίοι διαθέτουν πλανήτες,");
var ne = prompt("για τα άστρα που διαθέτουν πλανήτες, ο μέσος αριθμός των πλανητών οι οποίοι πιθανώς μπορούν να υποστηρίξουν ζωή,");
var fl = prompt("το ποσοστό των πλανητών στους οποίους η ζωή αναπτύσσεται επιτυχώς,");
var fi = prompt("το ποσοστό των πλανητών στους οποίους υπάρχει νοήμων ζωή με τον δικό της πολιτισμό,");
var fc = prompt(" το ποσοστό των πολιτισμών αυτών οι οποίοι έχουν τις τεχνικές δυνατότητες απομακρυσμένης επικοινωνίας");
var L = prompt("η χρονική διάρκεια κατά την οποία αυτοί οι πολιτισμοί εκπέμπουν ανιχνεύσιμα σήματα.");
var N = R * fp * ne * fl * fi * fc * L
document.getElementById("aliens").innerHTML = "Σύμφωνα με τα στοιχεία που έδωσες " + name + ", " + N + " εξωγήινοι πολιτισμοί υπάρχουν στο γαλαξία μας.  ";
}

function myip(){
var findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})
/*Usage example*/
findIP.then(ip => document.getElementById("addrr").innerHTML = ip).catch(e => console.error(e))
}

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

  var d = new Date();
  var n = d.getHours();
  if (n > 18){
  greeting = 'Καλο βραδυ';
} else if (n > 12) {
  greeting = 'Καλησπέρα';
} else if (n > 0) {
  greeting = 'Καλημερα';
} else {
  greeting = 'Καλός ήρθες';
}

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  var weekday = new Array(7);
  weekday[0] = "Κυριακή";
  weekday[1] = "Δευτέρα";
  weekday[2] = "Τρίτη";
  weekday[3] = "Τετάρτη";
  weekday[4] = "Πέμπτη";
  weekday[5] = "Παρασκευή";
  weekday[6] = "Σάββατο";

  var day = weekday[today.getDay()];
  var ΗΗ = String(today.getHours());
  var ΜΜ = String(today.getMinutes());
  time = ΗΗ + ':' + ΜΜ;
  today = dd + '/' + mm + '/' + yyyy;

  document.getElementById("greed").innerHTML = '<em>' + greeting + ', σήμερα είναι ' + day + ' ' + today + ' και η ωρα ειναι ' + time + ', η εξωτερική σου IP είναι ' + userip + '.</em>';



  fetch("https://corona.lmao.ninja/countries")
  .then(response => response.json())
  .then(data => {
     // o arithmos tis xoras edo
      var i =0;
      document.getElementById('h1').innerHTML=`${data[i].country}`;   
      document.getElementById('1').innerHTML= `Συνολικά είναι ${data[i].cases} υποθέσεις, σήμερα είχαμε ${data[i].todayCases} καινούριες. Συνολικά πέθαναν ${data[i].deaths} άνθρωποι ενώ σήμερα είχαμε ${data[i].todayDeaths} θανάτους, έγιναν καλά ${data[i].recovered} και σε κρίσιμη κατάσταση είναι ${data[i].critical}. Στα νοσοκομεία νοσηλεύονται ${data[i].active}. Ενώ οι υποθέσεις ανά εκατομμύριο πολιτών είναι ${data[i].casesPerOneMillion}`;
  
      var i =1;
      document.getElementById('h2').innerHTML=`${data[i].country}`;   
      document.getElementById('2').innerHTML= `Συνολικά είναι ${data[i].cases} υποθέσεις, σήμερα είχαμε ${data[i].todayCases} καινούριες. Συνολικά πέθαναν ${data[i].deaths} άνθρωποι ενώ σήμερα είχαμε ${data[i].todayDeaths} θανάτους, έγιναν καλά ${data[i].recovered} και σε κρίσιμη κατάσταση είναι ${data[i].critical}. Στα νοσοκομεία νοσηλεύονται ${data[i].active}. Ενώ οι υποθέσεις ανά εκατομμύριο πολιτών είναι ${data[i].casesPerOneMillion}`;
  
      var i =2;
      document.getElementById('h3').innerHTML=`${data[i].country}`;   
      document.getElementById('3').innerHTML= `Συνολικά είναι ${data[i].cases} υποθέσεις, σήμερα είχαμε ${data[i].todayCases} καινούριες. Συνολικά πέθαναν ${data[i].deaths} άνθρωποι ενώ σήμερα είχαμε ${data[i].todayDeaths} θανάτους, έγιναν καλά ${data[i].recovered} και σε κρίσιμη κατάσταση είναι ${data[i].critical}. Στα νοσοκομεία νοσηλεύονται ${data[i].active}. Ενώ οι υποθέσεις ανά εκατομμύριο πολιτών είναι ${data[i].casesPerOneMillion}`;
     
      
       })
      
/*
fetch("http://newsapi.org/v2/top-headlines?country=gr&apiKey=e64cb01f6ddd440286928859e7ff3aab")
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
            var mainContainer = document.getElementById("newsapigr");
            var topContainer = document.getElementById("apigr")
            for (var i = 0; i < data.articles.length; i++) {
                var div = document.createElement("div");
                var divv = document.createElement("em");
                if (data.articles[i].urlToImage != null){
                div.innerHTML = '<h1>'+data.articles[i].title+' </h1><center><img src="'+data.articles[i].urlToImage+'" width="300"></center><p>'+data.articles[i].description+'<br> <a href="'+data.articles[i].url+'">περισσότερα εδώ</a></p>';
                } else {
                div.innerHTML = '<h1>'+data.articles[i].title+' </h1><p>'+data.articles[i].description+'<br> <a href="'+data.articles[i].url+'">περισσότερα εδώ</a></p>';
                }
               divv.innerHTML= data.articles[i].title;
                topContainer.appendChild(divv);
                mainContainer.appendChild(div);
       //         console.log(data.articles);
            }
        }
    */

                fetch("https://api.nasa.gov/planetary/apod?api_key=aUSWiBgYi0yuMOcjyilylvSpjJ8ar2hD0AyTyRhh")
                .then(response => response.json())
                .then(data => {
                  document.getElementById('nasa').innerHTML=`
  <h1> ${data.title} <em>${data.date}</em></h1>
  <p><img src="${data.hdurl}" width="100%"><br> ${data.explanation}
  </p>
  `;
                
                });

                $(function() {

                  var marquee = $("#marquee"); 
                  marquee.css({"overflow": "hidden", "width": "100%"});
              
                  // wrap "My Text" with a span (old versions of IE don't like divs inline-block)
                  marquee.wrapInner("<span>");
                  marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" }); 
                  marquee.append(marquee.find("span").clone()); // now there are two spans with "My Text"
              
                  // create an inner div twice as wide as the view port for animating the scroll
                  marquee.wrapInner("<div>");
                  marquee.find("div").css("width", "200%");
              
                  // create a function which animates the div
                  // $.animate takes a callback for when the animation completes
                  var reset = function() {
                      $(this).css("margin-left", "0%");
                      $(this).animate({ "margin-left": "-100%" }, 11000, 'linear', reset);
                  };
              
                  // kick it off
                  reset.call(marquee.find("div"));
              
              });

              function fullscreen() {
                window.open("news/news.html", "_blank", "toolbar=no,addressbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=800");
              }    


fetch("index.json")
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
            var mainContainer = document.getElementById("chrisnews");
            for (var i = 0; i < data.articles.length; i++) {
             var div = document.createElement("div");
             let dl;
             if(data.articles[i].download!= null){
                 dl=`<a href="${data.articles[i].download}">Download</a>`; 
             } else {
                 dl = '';
             }
             div.innerHTML = `
             <h1> ${data.articles[i].title} </h1>
             <center><img src="${data.articles[i].urlToImage}" width="250"></center><br>
             
             <p> 
             ${data.articles[i].description}<br>
             <em>Εκδόθηκε ${data.articles[i].publishedAt} από
              ${data.articles[i].source.name}</em><br>
             ${dl}
             </p>`;
   
                mainContainer.appendChild(div);
 
            }
        }