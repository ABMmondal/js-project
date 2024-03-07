console.log('hiii');
const alarmSubmit =document.getElementById('alarSubmit');

alarmSubmit.addEventListener("click",setAlarm);
var audio= new Audio('../audio/alarm.mp3')
function ring(){
   audio.play();
}
function setAlarm(e){
    e.preventDefault();
   
    const alarm =document.getElementById('alarm');

    alarmDate =new Date(alarm.value);
    console.log(`${alarmDate}`);
    now = new Date();
    let timetoAlarm =alarmDate-now;
    console.log(timetoAlarm);
    let Alart = document.getElementById("alart");
    if(timetoAlarm>=0){
        setTimeout(() => {
            ring();
        }, timetoAlarm);
        Alart.innerHTML=`<div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> your alarm is set
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
    </div>`
    }
    else{
        Alart.innerHTML=`<div id="failure" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!</strong>plese enter correct date (yyyy-mm-dd hh:mm:ss)
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
    </div>`
    }
    

}