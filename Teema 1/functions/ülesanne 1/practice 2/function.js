var i = prompt("Напишите свою группу");
let forYear =  new Date().getFullYear();
var aasta = 0;
document.write(i + "<hr>");
if(i.length == 6 || i.length == 7){
    if(i.substring(0,1) === "J"){
        document.write('ÕppeKoht - Jõhvi<hr>');
    }else if(i.substring(0,1) === "S"){
        document.write('ÕppeKoht - Sillamäe<hr>');
    }else if(i.substring(0,1) === "N"){
        document.write('ÕppeKoht - Narva<hr>');
    }
    else {
        document.write('ÕppeKoht - ei tea');
    }
    if(i.substring(1,2) === "P"){
        document.write('ÕppeBaas - Põhiharidus<hr>');
    }else if(i.substring(1,2) === "K"){
        document.write('ÕppeBaas - Keskharidus<hr>');
    }else{
        document.write('ÕppeBaas - ei tea<hr>');
    }
    if(i.length == 7){
        if(i.substring(4,5) === "R"){
            document.write('ÕppeKeel - Vene keel<hr>');
        }else if(i.substring(4,5) === "E"){
            document.write('ÕppeKeel - Eesti keel<hr>');
        }else{
            document.write('ÕppeBaas - ei tea<hr>');
        }
        aasta = i.substring(5,7);
        if((forYear - 2000 - aasta) < 5){
            document.write('ÕppeKursus - ' + (forYear - 2000 - aasta + 1) + '<hr>');
        }else{
            document.write('ÕppeKursus - выпускники уже какой курс?<hr>');
        }
    }else{
        aasta = i.substring(4,6);
        if((forYear - 2000 - aasta) < 4 && (forYear - 2000 - aasta) >= 0){
            document.write('ÕppeKursus - ' + (forYear - 2000 - aasta + 1) + '<hr>');
        }else{
            document.write('ÕppeKursus - выпускники уже, какой курс?<hr>');
        }
    }
}