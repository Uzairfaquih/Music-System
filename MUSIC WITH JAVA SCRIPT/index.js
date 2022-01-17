var a= document.querySelectorAll(".drum")
var b = a.length
for (let index = 0; index < b; index++) 
{   
    document.querySelectorAll(".drum")[index].addEventListener("click",function () {
    //    console.log(this);
        var myNote = this.innerHTML;
        // console.log(myNote);
        Sing(myNote);
        buttonAnimate(myNote);
    }
    );
    
    
}

document.addEventListener("keypress",function(event){
    var myNote =event.key
    // console.log(myNote);
    console.log(event);
    Sing(myNote);
    buttonAnimate(event.key)
})




// console.log(b);

function Sing(myNote) {
    
    switch (myNote) {
        case "s":
        case "Sa":
            var audio = new Audio("asset/music/tom-1.mp3");
            audio.play();
            // document.getElementById("Sa").style.color="grey";
            break;
        case "r":
        case "Re":
            var audio = new Audio("asset/music/tom-2.mp3");
            audio.play();
            break;
        case "g":
        case "Ga":
            var audio = new Audio("asset/music/tom-3.mp3");
            audio.play();
            break;
        case"m":
        case "Ma":
            var audio = new Audio("asset/music/tom-4.mp3");
            audio.play();
            break;
        
        case "p":
        case "Pa":
            var audio = new Audio("asset/music/snare.mp3");
            audio.play();
            break;
    
        case "d":
        case "Dha":
            var audio = new Audio("asset/music/kick-bass.mp3");
            audio.play();
            break;
    
        case "n":
        case "Ni":
            var audio = new Audio("asset/music/crash.mp3");
            audio.play();
            break;
    
        default:
            console.log(myNote);
            break;
    }
}

function buttonAnimate(currentkey) {
    let activeButton =document.querySelector("."+currentkey);
    // console.log(activeButton);
    // console.log(currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },100);
    // if (activeButton=="Sa") {
    //     console.log("Yes");
    // }
    // else{
    //     console.log("No");
    // }
}   

