for(var i=0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",HandleClick);
    function HandleClick(){
        buttonIH= this.innerHTML;
        playsound(buttonIH);
        ButtonAnimation(buttonIH);
       
    }
}
document.addEventListener("keydown",function(event){
    playsound(event.key);
    ButtonAnimation(event.key);
})



function playsound(getkey){
    switch (getkey) {
        case 'w':
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
       }
}

function ButtonAnimation(currentKey){
    var activebutton= document.querySelector("."+currentKey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed")
    },100);
}