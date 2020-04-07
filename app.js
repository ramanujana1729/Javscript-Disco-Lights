
function discoLight() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}


// function bg_change() {
//     var id = setInterval (
//         function(){
           
//         } , 1000
//     );
// }

// function bg_stop() {
//     // clearInterval (id);
//     // document.body.style.background= 'white';
// }