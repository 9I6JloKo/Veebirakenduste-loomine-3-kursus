$(document).ready(() =>{
    for(var i = 0; i<category.length;i++){
        var li = document.createElement('li');
        li.innerHTML=('<a href="#" onClick="myContent(\''+category[i]+'\')" >' + category[i]+'</a>');
        document.getElementById("menu").appendChild(li);
    }
})

function myContent(val){
    var header = '<h2>'+val+'</h2>';
    var text='';
    var newAnimals = animals.filter(a=> a.classname==val);
    if(newAnimals.length>0){
        for(var i = 0; i<newAnimals.length;i++){
            text+='<div style="float:left">';
            text+='<img src="images/'+newAnimals[i].image+'" style="margin:5px;">';
            text+='<p>'+newAnimals[i].name+'</p>';
            text+='<p><a href="#" onClick="Detail(\''+newAnimals[i].name+'\')">Подробнее...</a></p>';
            text+='</div>';
        }
        $("#content").html(header+text);
    }else{
        $("#content").html(header+"Данных нет");
    }
}
function Detail(item){
    var text='';
    var detail = animals.filter(d=> d.name==item);
    if(detail.length>0){
        for(var i = 0; i<detail.length;i++){
            var header='<h2>'+detail[i].classname+': '+detail[i].name+'</h2>';
            text+='<div style="float:left;">';
            text+='<img src="images/'+detail[i].image+'" style="margin:5px;">';
            text+='<p>'+detail[i].description+'</p>';
            text+='<p><a href="#" onClick="myContent(\''+detail[i].classname +'\')">Back categories</a></p>';
            text+='</div>';
        }
        $("#content").html(header+text);
    }else{
        $("#content").html(header+"Данных нет");
    }
}
