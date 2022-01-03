function setClock(){
    let date = new Date();
    let hrs = parseInt( date.getHours() ); // 0- 23
    let min = parseInt( date.getMinutes() ); // 0 - 59
    let sec = parseInt( date.getSeconds() ); // 0 - 59

    let period = "AM"
    
    if (hrs == 0){
        hrs = 12;
    }
    if(hrs > 12){
        hrs = hrs - 12;
        period = "PM";
    }
    if (hrs < 10){
        hrs = `0${hrs}`;
    }
    if ( min < 10){
        min = `0${min}`;
    }
    if (sec < 10){
        sec = `0${sec}`;
    }



/*
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs; */

  let time = `${hrs}:${min}:${sec} ${period}`;
    // let time = hrs + ":" + min + ":" + sec + " " + period ;
    
    document.getElementById("clock").innerText = time;

    setTimeout(setClock, 1000);
}


setClock();