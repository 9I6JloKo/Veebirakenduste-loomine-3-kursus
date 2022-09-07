function changeColor() {
    document.getElementById('1').style.backgroundColor = 'rgba(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.random(1) + ')';
}
window.addEventListener('keypress', function(event) {
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById('4').click();
    }
})
function addText() {
    let text = document.getElementById('2').innerHTML;
    text += 'Dzjuba pidor';
    document.getElementById('2').innerHTML = text;
}
let i = 0;
function clickCount() {
    if(i===5){
        document.getElementById('3').innerHTML = "";     
        return
    }
    i+=1;
    document.getElementById('3').innerHTML = "Counter: " + i;
}