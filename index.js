const hour = document.getElementById("Hours")
const minute = document.getElementById("minutes")
const second = document.getElementById("seconds")
const start = document.querySelector("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")
let [seconds,minutes,hours] = [0,0,0]
let timer = null
const addZero = (num) => {
    return num < 10 ? "0" + num : num
}
const stopwatch = () => {
    seconds++
    if(seconds == 60){
        seconds = 0
        minutes ++
        if(minutes == 60){
            minutes = 0
            hours ++
        }
    }
    hour.innerHTML = addZero(hours) + ":"
    minute.innerHTML = addZero(minutes) + ":"
    second.innerHTML = addZero(seconds)

}
function updateTime(){
    if(timer!=null){
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000)
}
const stopTimer = () => {
    clearInterval(timer)
}
const resetTimer = () => {
    clearInterval(timer)
    seconds = 0
    minutes = 0
    hours = 0
    hour.innerHTML = "00:"
    minute.innerHTML = "00:"
    second.innerHTML = "00"
}
