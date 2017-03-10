var days = document.getElementsByTagName("td");
var result = [];
//**********************************************
function markRst(){
  result = [];
  for(var i in days.length){
    console.log(i);
    console.log("Hello");
    days[i].classList.remove("off");
    days[i].classList.add("on");
  }
}
//**********************************************
function dayMarker(date) {
  var day = new Date(date);
  if(result.length == 2){
    markRst();
  }
  console.log(day);
  days[day.getDay()].classList.add("on");
  result.push(day.getDay());
}
//**********************************************
var dates = document.getElementsByTagName("input");

markRst();

// days[0].addEventListener("change",dayMarker("4 April 2010"));
