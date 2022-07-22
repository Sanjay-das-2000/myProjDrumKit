var size = document.querySelectorAll(".drum").length;

for(var i=0; i<size; i++)
  {
      document.querySelectorAll("button")[i].addEventListener("click", function(){
        var pressbutton = this.innerHTML;
        makesound(pressbutton);
        makeAnimation(pressbutton);
      });
  }

document.addEventListener("keydown", function(event){
    makesound(event.key);
    makeanimation(event.key);
})

function makesound(pressbutton)
  {
      switch(pressbutton){
        case "w":
              var audio = new Audio("sounds/crash.mp3");
              audio.play();
        break;
        case "a" :
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        case "s" :
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "d" :
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "j" :
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "k" :
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "l" :
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        default : console.log("ERROR!");
      }
  }

function makeanimation(pressbutton)
  {
      document.querySelector("."+pressbutton).classList.add("pressed");

      setTimeout(function(){
          document.querySelector("."+pressbutton).classList.remove("pressed");
      },100);
  }