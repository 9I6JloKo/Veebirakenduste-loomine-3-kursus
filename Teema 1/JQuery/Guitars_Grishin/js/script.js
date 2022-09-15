$(document).ready(() =>{
    document.getElementById("header").innerHTML = 'Все о гитарах'
    for(var i = 0; i<categories.length;i++){
        var li = document.createElement('p');
        li.innerHTML=('<a href="#" onClick="myContent(\''+categories[i]+'\')" >' + categories[i]+'</a>');
        document.getElementById("menu").appendChild(li);
    }
    $("a").css("text-transform", "uppercase");
    $("h2").html(content[0].title);
    $("li").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
      });
    document.getElementById("text").innerHTML = content[0].text + "<a data-title='Гитары' data-lightbox='image-1' href='images/" + content[0].img + "'><img style='margin-top:30px' src=images/" + content[0].img + "></a>";
})

function myContent(answer){
    var guitar = content.filter(a=> a.title==answer);
    $("h2").html(guitar[0].title);
    $("#text").html(guitar[0].text);
    document.getElementById("text").innerHTML += "<a data-title='Гитары' data-lightbox='image-1' href='images/" + guitar[0].img + "'><img style='margin-top:30px' src=images/" + guitar[0].img + "></a>";
}