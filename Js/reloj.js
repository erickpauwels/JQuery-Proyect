//Reloj

setInterval(function () {
    let reloj = moment().format("hh:mm:ss");
console.log(reloj);
$("#reloj").html(reloj);
},1000);
