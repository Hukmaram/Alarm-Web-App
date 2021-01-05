console.log("This is project5 file");
let myTime=document.getElementById('myTime')
let timeBttn=document.getElementById('timeBttn');
timeBttn.addEventListener('click',()=>{
    localStorage.setItem('time',myTime.value);
})
setInterval(() => {
    let dt=new Date();
    let times=(dt.getHours()+":"+dt.getMinutes()).toString();
    console.log(times,localStorage.getItem('time'))
    if(times===localStorage.getItem('time')){
        playAlarm();
    }
}, 60000);
function playAlarm(){
 let audio=new Audio('/hukmaram-this-is-wake-up-time.wav');
 audio.play();
}
