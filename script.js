function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
     
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    setTimeout(showTime, 1000);
    
}

function showdate() {
  var date =new Date();
    var month="";
   var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
  if(m == 0){
        month="Jan";
    }
  else if(m==1){
     month="Feb";
  }
  else if(m==2){
     month="March";
  }
  else if(m==3){
     month="April";
  }
  else if(m==4){
     month="May";
  }
    var fulldate = d + "/" + month + "/" + y;
   document.getElementById("MydateDisplay").innerText = fulldate;
  
}

showTime();
showdate();
