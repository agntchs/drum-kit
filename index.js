
// document.querySelector(".set").addEventListener("click", function () {alert("I got clicked!");});

// var btns = document.querySelectorAll("button");
// btns.forEach.addEventListener("click", function () {alert("I got clicked!");});
// var buttons = document.querySelectorAll('button');
// for (var button of buttons) {
//   button.addEventListener("click", function () {
//     this.style.backgroundColor = "green";
//   });
// }

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});
}
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key)
});

function makeSound(key){
       switch (key) {
         case "w":
         var tom1 = new Audio('sounds/tom-1.mp3');
         tom1.play();
           break;
           case "a":
           var tom2 = new Audio('sounds/tom-2.mp3');
           tom2.play();
             break;
             case "s":
             var tom3 = new Audio('sounds/tom-3.mp3');
             tom3.play();
               break;
               case "d":
               var tom4 = new Audio('sounds/tom-4.mp3');
               tom4.play();
                 break;
                 case "j":
                 var snare = new Audio('sounds/snare.mp3');
                snare.play();
                   break;
                   case "k":
                   var crash = new Audio('sounds/crash.mp3');
                   crash.play();
                     break;
                     case "l":
                     var kick = new Audio('sounds/kick-bass.mp3');
                     kick.play();
                       break;
         default: console.log(buttonInnerHTML)

       }}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout (()=>activeButton.classList.remove("pressed"), 100); 
}


// document.addEventListener('keydown', keyDown);
//
// function keyDown(e){
//     var keyP = e.key;
//     switch (keyP) {
//       case "w":
//       keyP = "w";
//       var tom1 = new Audio('sounds/tom-1.mp3');
//       tom1.play();
//         break;
//         case "a":
//           keyP = "a";
//         var tom2 = new Audio('sounds/tom-2.mp3');
//         tom2.play();
//           break;
//           case "s":
//             keyP = "s";
//           var tom3 = new Audio('sounds/tom-3.mp3');
//           tom3.play();
//             break;
//             case "d":
//               keyP = "d";
//             var tom4 = new Audio('sounds/tom-4.mp3');
//             tom4.play();
//               break;
//               case "j":
//                 keyP = "j";
//               var snare = new Audio('sounds/snare.mp3');
//              snare.play();
//                 break;
//                 case "k":
//                   keyP = "k";
//                 var crash = new Audio('sounds/crash.mp3');
//                 crash.play();
//                   break;
//                   case "l":
//                     keyP = "l";
//                   var kick = new Audio('sounds/kick-bass.mp3');
//                   kick.play();
//                     break;
//       default: console.log(KeyP)
// }
// }
