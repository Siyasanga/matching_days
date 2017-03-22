var days = document.getElementsByTagName("td");
var last1 = -1;
var last2 = -1;
var rem1 = "";
var rem2 = "";
var day2 = document.getElementById("day2");
var day1 = document.getElementById("day1");
//**********************************************
day1.addEventListener("change",function () {
    var day = new Date(day1.value);
    var ada = new Date(day2.value);
    if(last1 !== -1){
      days[last1].classList.remove(rem1);
    }
    if(rem1 == "match"){
      days[last1].classList.add("second");
    }
    days[day.getDay()].classList.add("first");
    rem1 = "first";
    last1 = day.getDay();
    if(day.getDay() === last2){
      days[day.getDay()].classList.remove("first");
      days[day.getDay()].classList.remove("second");
      days[day.getDay()].classList.add("match");
      rem2,rem1 = "match";
    }
});
day2.addEventListener("change",function () {
  var day = new Date(day2.value);
  var ada = new Date(day1.value);
  if(last2 !== -1){
    days[last2].classList.remove(rem2);
  }
  if(rem2 == "match"){
    days[last2].classList.add("first");
  }
  days[day.getDay()].classList.add("second");
  rem2 = "second";
  last2 = day.getDay();
  if(day.getDay() === last1){
    days[day.getDay()].classList.remove("second");
    days[day.getDay()].classList.remove("first");
    days[day.getDay()].classList.add("match");
    rem1,rem2 = "match";
  }
});
