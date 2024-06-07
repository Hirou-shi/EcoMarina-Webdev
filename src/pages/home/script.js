function scrolltosec1() {
    document.getElementById('sec1').scrollIntoView({ behavior: 'smooth'});
}
function scrolltosec2() {
    document.getElementById('sec2').scrollIntoView({ behavior: 'smooth'});
}
function scrolltosec3() {
    document.getElementById('sec3').scrollIntoView({ behavior: 'smooth'});
}
function scrolltosec4() {
    document.getElementById('sec4').scrollIntoView({ behavior: 'smooth'});
}
function scrolltosec5() {
    document.getElementById('sec5').scrollIntoView({ behavior: 'smooth'});
}
function scrolltosec6() {
    document.getElementById('sec6').scrollIntoView({ behavior: 'smooth'});
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function () {
 nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

document.getElementById("radio"+count).checked = true;

}