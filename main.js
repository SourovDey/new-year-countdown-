let days = document.querySelector(".days")
let hours = document.querySelector(".hours")
let mins = document.querySelector(".mins")
let sec = document.querySelector(".sec")


function coundown(){
    const newyear = new Date("1 january 2024 12:00:00");
    const now = new Date();
   
    let totaltime = newyear - now ;
    let totalSec = Math.floor(totaltime / 1000);
    let totalMin = Math.floor(totalSec / 60);
    let totalHour = Math.floor(totalMin / 60);
    let totalDays = Math.floor(totalHour / 24);

    let totalHourleft = Math.floor(totalHour % 24);
    let totalMinleft = Math.floor(totalMin % 60);
    let totalSecleft = Math.floor(totalSec % 60);


    days.innerHTML= totalDays;
    hours.innerHTML= totalHourleft;
    mins.innerHTML= totalMinleft;
    sec.innerHTML= totalSecleft;


    // console.log(totalDays,totalHourleft,totalMinleft,totalSecleft);
}
setInterval(coundown,1000);