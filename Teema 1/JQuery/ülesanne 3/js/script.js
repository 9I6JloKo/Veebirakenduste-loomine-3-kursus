$(document).ready(() =>{
    document.getElementById("header").innerHTML = 'Все о гитарах'
    for(var i = 0; i<categories.length;i++){
        var li = document.createElement('p');
        li.innerHTML=('<a href="#" onClick="myContent(\''+categories[i]+'\')" >' + categories[i]+'</a>');
        document.getElementById("menu").appendChild(li);
    }
    $("a").css("text-transform", "uppercase");
    $("html").css("background-color", "antiquewhite");
    document.getElementById("h2").innerHTML = content[0].title;
    document.getElementById("text").innerHTML = content[0].text + " <img style='margin-top:30px' src=/images/" + content[0].img + ">";
})

function myContent(answer){
    var guitar = content.filter(a=> a.title==answer);
    for(let i = 0; i< guitar.length; i++){
        document.getElementById("h2").innerHTML = guitar[i].title;
        document.getElementById("text").innerHTML = guitar[i].text;
        document.getElementById("main").innerHTML = "<div id='forImg'><img style='margin-top:30px' src=images/" + guitar[i].img + "></div>";
    }
}