let time = document.querySelector(".clock_container");//get the properties with the classname clock-container and store them in clockDigit

function showTime(){
    
    const date = new Date(); //gets the current date

    //gets the current hour, minutes, and seconds and stores them in the variable
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let period = "AM";

    // console.log(hr, min, sec);

    //toggles between AM and PM
    if (hr == 0){
        hr = 12;
    }
    else if (hr > 12){
        hr = hr - 12;
        period = "PM";
    }

    //Adds zero(0) before the time less than 10 
    hr = (hr < 10)? "0" + hr : hr;
    min = (min < 10)? "0" + min : min;
    sec = (sec < 10)? "0" + sec : sec;

    time.innerHTML = `${hr}:${min}:${sec} ${period}`;
}
setInterval(showTime,1000);