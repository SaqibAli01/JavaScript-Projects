// ................coding 1......../

// function timer() {
//     console.log("Runnig....Setinterval")
// }

// ................coding 2......../

// setInterval(timer,1000)

// function timeout()
// {
//     console.log("Running ..SetTimeout")
// }
// setTimeout(timeout, 2000)

// ................coding 3......../

let count = 0;
// time ko runkny k lia 
let stoptime;

function time()
{
    count++;
    console.log(count);
}
stoptime =  setInterval(time, 1000)
                            // asy be function bana skty ha 
    setTimeout(function timeStop() {
                             // ye stop krny k lia 
    clearInterval(stoptime);
                                 //ye five second k bad stop ho jy ga
},5000)

// stop watch ki codding 

let min = 0;
let sec = 0;
let msec = 0;

let mints = document.getElementById('mint');
let secconds = document.getElementById('second');
let miliseconds = document.getElementById('milisecond');

let interval;

function timer() {
    msec++;
    miliseconds.innerHTML = msec;
    //ab is me condition lagni ha ja 
    if (msec >= 100) {
        //jab mili second 100 ho ga to ye second me ak Plus kr dy ga
        sec++;
        secconds.innerHTML = sec;

        // ab jab milisecond 100 ho ga to us k bad zero ho jy ga
        msec = 0;
    }
    //ab ham is ko mint me plus krwy gy
    else if(sec >= 60)
    {
        min++;
        mints.innerHTML = min;
        sec = 0; 
    }
}
// is coding ko bad me button me rhak dna ha
// interval = setInterval(timer,10)

function start()
{
    interval = setInterval(timer,10)

}
function stop()
{
    // oper jo interval us ko is me pass kr dia hh
    clearInterval(interval);
}
function reset()
{
    // sub ko zero kr dia

    min = 0;
    sec = 0;
    msec = 0;

    mints.innerHTML = min;
    secconds.innerHTML = sec;
    miliseconds.innerHTML = msec;
    //stop waly function ko be call ki ha .. q k dubra start ho jy
    stop();


}