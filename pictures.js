function noAlert(){
    alert('Please Choose the correct candidate');
}
function yesAlert(){
    alert('Thank you for your vote')
}
function perhapsAlert(){
    alert('VOTE NIXON');
}
window.onload = setTimeout(() => {
        alert('Make the right decision america is watching');   
}, 100);
var richard = 0;
var nixon = 0;
var is = 0;
var the = 0;
var best = 0;


var arrayForDivImages = [richard, nixon, is, the, best]
var div = document.getElementById('cluster')
function leaveFunction(){
    var i = 0; arrayForDivImages.length; i++;{
       div += arrayForDivImages[i]
    }
};

