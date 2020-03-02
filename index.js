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
alert("Σύμφωνα με τα στοιχεία που έδωσες, " + N + " εξωγήινοι πολιτισμοί υπάρχουν στο γαλαξία μας.  ");
}


function myip() {
var findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})
/*Usage example*/
findIP.then(ip => alert('your ip: ' + ip)).catch(e => console.error(e))

}
 

