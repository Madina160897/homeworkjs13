let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

function oneTask(){   
    console.log(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`)
}
oneTask();

function twoTask() {
    let a = +prompt("Введите секунды")
    if(seconds + a >= 60){
        let secmin = Math.floor((seconds + a) / 60);
        let sec = (seconds + a) % 60;
        let minhour = Math.floor((secmin + minutes) / 60);
        let min = (secmin + minutes) % 60;
        let hour = (hours + minhour) % 24;
            console.log(`${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`) 
        }else console.log(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${(seconds + a).toString().padStart(2, "0")}`)
}

twoTask();

function threeTask() {
    let b = +prompt("Введите минуты")
    if(minutes + b >= 60){
        let minhour = Math.floor((b + minutes) / 60);
        let min = (b + minutes) % 60;
        let hour = (hours + minhour) % 24;
            console.log(`${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`) 
        }else console.log(`${hours.toString().padStart(2, "0")}:${(minutes + b).toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`)
}

threeTask();

function fourTask() {
    let c = +prompt("Введите часы")
    if(hours + c >= 24){
        let hour = (hours + c) % 24;
            console.log(`${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`) 
        }else console.log(`${(hours + c).toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`)
}

fourTask();

let n = Math.ceil(Math.random()*100);
let a = +prompt("Угадай число");
let b = 0;

while(a != n){
    if(a > n){
        a = prompt("Много. Попробуй ещё раз");
        b += 1
    }else if(a < n){
        a = prompt("Мало. Попробуй ещё раз");
        b += 1
    }
}

console.log("Правильно! Это число " + n + ". Угадали с " + b + " раза ")