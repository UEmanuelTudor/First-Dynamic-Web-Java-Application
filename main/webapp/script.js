function display_r(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_dt()',refresh)
}
function display_dt() {
var x = new Date()
var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
document.getElementById('dat').innerHTML = x1;
display_r();
 }