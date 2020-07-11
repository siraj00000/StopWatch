var ms = 0;
var s = 0;
var m = 0;
var stopWatch = document.getElementById('stopwatch')
var lapContainer = document.getElementById('laps')
var interval;

function watch(){
    return  (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms: ms);
}
function timer(){
    stopWatch.innerHTML =  watch();
    ms++
    if(ms == 100){
        s++;
        ms = 0;
    }else if (s == 60 ){
        m++;
        s = 0
    } 
}
function start(){
    if(!interval){
        interval = setInterval(timer,100)
    }
}
function stop(){
    clearTimeout(interval)
}
function pause(){
    stop()
    interval = false;
}
function restart(){
    m = 0;
    s = 0;
    ms = 0;
    stopWatch.innerHTML = watch();
}
function lap(){
    if(interval){
        var li = document.createElement('li')
        li.innerHTML = watch();
        lapContainer.appendChild(li).style.cssText = "list-style-type: none; color: white; font-size: 20px; margin: 15px 20px 1px 5px; font-weight: bold; border: 1px solid black;background-color:black;";
    }
}
function resetlap(){
    lapContainer.innerHTML = "";
}
