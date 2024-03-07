console.log('hii');
function updateclock(){
    let currentTime =new Date();
    let currentHours =currentTime.getHours();
    let currentMinutes =currentTime.getMinutes();
    let currentSeconds =currentTime.getSeconds();

    let timeOfDay =(currentHours<12)? "Am" :"PM";

    let currentTimestr = currentHours + ":" + currentMinutes + ":" +currentSeconds + " " + timeOfDay;
    document.getElementById('clock').innerHTML=currentTimestr; 

}