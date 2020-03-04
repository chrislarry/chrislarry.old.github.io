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
