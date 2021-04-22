let contDownDay = new Date("Jan 19, 2022 12:00:00").getTime();
const dd = document.getElementById('days');
const hh = document.getElementById('howers');
const mm = document.getElementById('menuts');
const ss = document.getElementById('secons');



let x = setInterval( function(){

    let newDay =  new Date().getTime();

    let contDown = contDownDay - newDay ;

    let day = Math.floor(contDown / (1000* 60 * 60 *24));
    let huers = Math.floor(contDown % (1000 * 60 * 60 * 24) / ( 100 * 60 * 60));
    let ment = Math.floor(contDown % ( 1000 * 60 * 60 ) / ( 1000 * 60 ));
    let sac = Math.floor(contDown % ( 1000 * 60 ) / 1000);

    dd.innerHTML = day + " D";
    hh.innerHTML = huers + " H";
    mm.innerHTML = ment + " M";
    ss.innerHTML = sac + " S";


    
} , 1000);
