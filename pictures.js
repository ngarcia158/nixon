
window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });
  
function noAlert(){
    this.alert('Please Choose the correct candidate');
}
function yesAlert(){
    this.alert('Thank you for your vote')
}
function perhapsAlert(){
    this.alert('VOTE NIXON');
}
window.onload = setTimeout(() => {
        this.alert('Make the right decision america is watching');   
}, 100);
var richard = `<img class="img" src="assets/nixon4.jpeg" alt="pablo"> <div class="overlay"><div class="imageTitle">Vote</div><p class="imageDescription" </p></div>`;
var nixon = `<img class="img" src="assets/nixon5.jpeg" alt="pablo"><div class="overlay"><div class="imageTitle"><p id="noContextMenu">Richard</p></div><p class="imageDescription"></p></div>`;
var is = `<img class="img" src="assets/nixon6.jpeg" alt="pablo"><div class="overlay"><div class="imageTitle noContextMenu">Nixon</div>    <p class="imageDescription"></p></div></div>`;
var the = `<img class="img" src="assets/nixon7.jpeg" alt="pablo"><div class="overlay"><div class="imageTitle noContextMenu">For</div><p class="imageDescription"></p></div>`;
var best = `<img class="img" src="assets/nixon3.jpeg" alt="pablo"><div class="overlay"><div class="imageTitle noContextMenu">President</div><p class="imageDescription"></p></div>`;

var displayArray = [richard, nixon, is, the, best];
var arrayForDivImages = [richard, nixon, is, the, best]
var div = document.getElementById('cluster')
function leaveFunction(){
    var i = 0; arrayForDivImages.length; i++;{
       div += arrayForDivImages[i]
    }
};

function placeItems () {
//   // create a new div element
//   const newDiv = document.getElementById("cluster").createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.after();

            var node = document.createElement("div");
            document.getElementById("cluster2").appendChild(node);
            node.setAttribute('class', 'image');
            var divClass = document.getElementById("image");
    

//     for(var i = 0; i <= displayArray.length; i++){
//         if(calculator == false){
            
//             calculator = true;
//             if(mouseLeave === true){
//                 calculator = false;
//             }
//         }
//         else{
//             return node
//         }
//     }
    

}